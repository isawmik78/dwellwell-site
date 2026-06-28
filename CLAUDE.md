# DwellWell Site: CLAUDE.md

This is the operating manual for any Claude Code session working in this repo. Read it before making changes and reconcile your work to it.

## Project

DwellWell Property Care LLC. Pre-launch, US-based managed property maintenance operator. B2B clients: property managers, landlords, lenders, real estate investors. Contracts directly with clients, dispatches vetted independent US contractors, earns a margin spread. It is a MANAGED OPERATOR, never a platform, marketplace, or directory.

Brand words: Trustworthy, Organised, Efficient.

## Stack and deploy

Astro. Repo github.com/isawmik78/dwellwell-site. Deployed to Cloudflare Pages at dwellwell-site.pages.dev. The Cloudflare dashboard is the source of truth for deploy state; do not trust cached fetch responses. Localhost is unreachable in the web session; verify against the live deployment.

## Governing documents (authoritative; reconcile to these)

Brand Guidelines v2.5 and Website Brief v3.1. Re-issue to v2.6 / v3.2 is pending and will batch GA-01 plus open decisions. Treat the latest issued versions as canonical.

## Locked brand tokens (do not invent or substitute)

Midnight #101E31, Steel Blue #4A8BB5, Cool White #F2F4F7, Cool Slate #57657A, Steel Grey #D8E0EA. Steel Blue Text #3A6E91 is pending ratification (D-E); do not rely on it until confirmed.

## Typography (locked)

Cormorant Garamond SemiBold 600 for Display, H1, and H2 only. Inter for every other level. DM Serif Display and Plus Jakarta Sans are retired draft candidates; never use them.

## Copy discipline (hard rules)

- No em dashes anywhere: copy, code comments, aria-labels, browser tab titles, alt text.
- Never claim "licensed and insured contractors only." Describe standards in plain operational terms.
- No experience claims and no warranty claims unless explicitly confirmed.
- Coverage and response-time copy are locked verbatim. Do not paraphrase the "same business day" acknowledgement line or the coverage wording.
- Specialist-trade gate: do not name or imply coordination of any code-regulated or licensed specialist trade (including but not limited to HVAC, electrical, plumbing) anywhere, including Resources articles, until operations confirms. The gate covers the category, not just the three named trades.

## Voice

The site uses a third-person ("DwellWell") and first-person ("we/us") hybrid. Pending formal blessing (D-C), keep new copy consistent with the existing site voice; do not introduce a different person or tone.

## Motif governance

Peak Fragment (2.8.B) is the canonical hero motif per GA-01, superseding the Open Arc (2.8.A). Truncated Descent may appear as a standalone element. Never rotate or mirror either motif.

## Pending decisions (do not implement until resolved)

D-B Urgency field on contact form. D-C voice blessing. D-D form backend (Cloudflare Pages Function recommended, to keep lead data in the owner pipeline). D-E Steel Blue Text token. D-F em-dash removal from the §8.1 locked string. Form 1 (primary Service Request) is not yet built; "Request service" currently points to /contact as a placeholder.

## Working conventions

- Relay model: an advisor/auditor Claude drafts handoffs; Claude Code implements. Prefer ready-to-paste handoffs over loose instructions.
- Propose visuals and get approval before writing code for any design decision.
- Versioned filenames and changelogs for documents. Green panels for locked decisions, amber for open items.
- Keep PATs and API tokens live for the full build cycle; revoke once at the end.
