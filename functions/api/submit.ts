// Cloudflare Pages Function: POST handler for the contact / general form and the
// Join as Contractor form. Both forms POST here as multipart/form-data.
//
// What it does:
//   - Routes the notification email by the hidden `formType` field:
//       contact / general  -> LEADS_EMAIL
//       contractor          -> CONTRACTORS_EMAIL
//   - Verifies the Cloudflare Turnstile token server-side (TURNSTILE_SECRET_KEY).
//   - Drops honeypot hits (the `company_website` field) silently.
//   - Sends the notification through Resend (RESEND_API_KEY) from FROM_EMAIL.
//   - Attaches the contact form's photos (max 3 files, 5MB each, enforced here).
//   - Returns 200 on success; on failure returns an error the form surfaces with
//     info@dwellwellpropertycare.com as the fallback.
//
// Nothing here is hardcoded: recipients, keys, and the from address all come from
// environment variables set in the Cloudflare Pages project. The client widget
// reads its site key from the build-time var PUBLIC_TURNSTILE_SITE_KEY.
//
// Env vars consumed:
//   LEADS_EMAIL            recipient for contact / general submissions
//   CONTRACTORS_EMAIL      recipient for contractor applications
//   FROM_EMAIL             verified Resend "from" address
//   RESEND_API_KEY         Resend API key
//   TURNSTILE_SECRET_KEY   Cloudflare Turnstile secret (server-side verification)

interface Env {
  LEADS_EMAIL: string;
  CONTRACTORS_EMAIL: string;
  FROM_EMAIL: string;
  RESEND_API_KEY: string;
  TURNSTILE_SECRET_KEY: string;
}

const MAX_FILES = 3;
const MAX_BYTES = 5 * 1024 * 1024;

// Field names that are control data, not lead content, so they are not listed in
// the notification body.
const CONTROL_FIELDS = new Set(['company_website', 'cf-turnstile-response', 'formType', 'photos']);

// Human-readable labels for the known fields (falls back to the raw name).
const FIELD_LABELS: Record<string, string> = {
  fullName: 'Full name',
  email: 'Email',
  phone: 'Phone',
  company: 'Company',
  stateZip: 'State / ZIP',
  serviceCategory: 'Service category',
  urgency: 'Urgency',
  message: 'Message',
  trade: 'Trade / specialty',
  areas: 'States / areas covered',
};

const jsonResponse = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });

const escapeHtml = (value: unknown) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

// Chunked base64 so large attachments do not overflow the call stack.
const toBase64 = (bytes: Uint8Array): string => {
  let binary = '';
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, i + chunkSize);
    binary += String.fromCharCode.apply(null, chunk as unknown as number[]);
  }
  return btoa(binary);
};

const verifyTurnstile = async (secret: string, token: string, ip: string | null): Promise<boolean> => {
  if (!secret || !token) return false;
  const body = new FormData();
  body.append('secret', secret);
  body.append('response', token);
  if (ip) body.append('remoteip', ip);
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body,
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
};

export const onRequestPost = async (context: { request: Request; env: Env }): Promise<Response> => {
  const { request, env } = context;
  const fallback = env.LEADS_EMAIL || 'info@dwellwellpropertycare.com';

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return jsonResponse(400, { ok: false, error: 'We could not read your submission.', contact: fallback });
  }

  // Honeypot: a real person never fills this. Accept and drop without emailing so
  // a bot cannot tell it was rejected.
  if (String(form.get('company_website') || '').trim() !== '') {
    return jsonResponse(200, { ok: true });
  }

  // Turnstile server-side verification.
  const token = String(form.get('cf-turnstile-response') || '');
  const ip = request.headers.get('CF-Connecting-IP');
  const isHuman = await verifyTurnstile(env.TURNSTILE_SECRET_KEY, token, ip);
  if (!isHuman) {
    return jsonResponse(400, { ok: false, error: 'Verification failed. Please try again.', contact: fallback });
  }

  const formType = String(form.get('formType') || 'contact').toLowerCase();
  const isContractor = formType === 'contractor';
  const to = isContractor ? env.CONTRACTORS_EMAIL : env.LEADS_EMAIL;

  if (!to || !env.FROM_EMAIL || !env.RESEND_API_KEY) {
    return jsonResponse(500, { ok: false, error: 'The form is not fully configured yet.', contact: fallback });
  }

  // Collect the text fields into ordered rows.
  const rows: string[] = [];
  let replyTo = '';
  for (const [key, value] of form.entries()) {
    if (CONTROL_FIELDS.has(key)) continue;
    if (typeof value !== 'string') continue;
    const trimmed = value.trim();
    if (trimmed === '') continue;
    if (key === 'email') replyTo = trimmed;
    const label = FIELD_LABELS[key] || key;
    rows.push(
      `<tr><td style="padding:6px 16px 6px 0;color:#57657A;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td>` +
        `<td style="padding:6px 0;color:#101E31;">${escapeHtml(trimmed).replace(/\n/g, '<br>')}</td></tr>`,
    );
  }

  // Attachments (contact form photos only). Enforce count and size on the server.
  const attachments: { filename: string; content: string }[] = [];
  let attachmentNote = '';
  if (!isContractor) {
    const files = form
      .getAll('photos')
      .filter((f): f is File => typeof f !== 'string' && !!f && (f as File).size > 0);
    const notes: string[] = [];
    if (files.length > MAX_FILES) notes.push(`More than ${MAX_FILES} photos were submitted; only the first ${MAX_FILES} were processed.`);
    for (const file of files.slice(0, MAX_FILES)) {
      if (file.size > MAX_BYTES) {
        notes.push(`A photo (${escapeHtml(file.name || 'unnamed')}) exceeded 5MB and was not attached. Follow up with the sender.`);
        continue;
      }
      try {
        const bytes = new Uint8Array(await file.arrayBuffer());
        attachments.push({ filename: file.name || 'photo', content: toBase64(bytes) });
      } catch {
        notes.push('A photo was submitted but could not be attached automatically. Follow up with the sender.');
      }
    }
    if (files.length > 0 && attachments.length === 0 && notes.length === 0) {
      notes.push('Photos were submitted but could not be attached. Follow up with the sender.');
    }
    attachmentNote = notes.join(' ');
  }

  const heading = isContractor ? 'New contractor application' : 'New contact / service request';
  const subjectName = String(form.get('fullName') || 'Website submission');
  const html =
    `<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#101E31;">` +
    `<h2 style="font-size:18px;color:#101E31;margin:0 0 16px;">${escapeHtml(heading)}</h2>` +
    `<table style="border-collapse:collapse;font-size:14px;">${rows.join('')}</table>` +
    (attachmentNote ? `<p style="color:#57657A;margin:16px 0 0;">${escapeHtml(attachmentNote)}</p>` : '') +
    (attachments.length ? `<p style="color:#57657A;margin:8px 0 0;">${attachments.length} photo(s) attached.</p>` : '') +
    `</div>`;

  const payload: Record<string, unknown> = {
    from: env.FROM_EMAIL,
    to: [to],
    subject: `${heading}: ${subjectName}`,
    html,
  };
  if (replyTo) payload.reply_to = replyTo;
  if (attachments.length) payload.attachments = attachments;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      return jsonResponse(502, { ok: false, error: 'Your message could not be sent.', contact: fallback });
    }
  } catch {
    return jsonResponse(502, { ok: false, error: 'Your message could not be sent.', contact: fallback });
  }

  return jsonResponse(200, { ok: true });
};
