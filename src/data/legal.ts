// Legal pages (C-06). These are honest, non-binding scaffolds: accurate about
// what this site actually does, with a "being finalized" note, intended for
// counsel review before launch. No warranty terms, timeframes, conditions, or
// implied guarantees anywhere. The Warranty/Rework entry is a gated shell:
// built but unpublished (excluded from routes) and unlinked (D-04, §8.2).

export interface LegalSection {
  heading: string;
  paras: string[];
}

export interface LegalPage {
  slug: string;
  eyebrow: string;
  title: string;
  meta: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
  gated?: boolean;
}

const FINALIZING = 'This page is being finalized ahead of launch. For questions in the meantime, contact info@dwellwellpropertycare.com.';

export const LEGAL: LegalPage[] = [
  {
    slug: 'privacy-policy',
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    meta: 'How DwellWell Property Care collects, uses, and protects information submitted through this website.',
    intro: 'This policy explains what information DwellWell Property Care collects through this website, how we use it, and the choices you have.',
    updated: 'Last updated June 2026',
    sections: [
      { heading: 'Information we collect', paras: ['When you submit a form on this site, we collect the details you provide: your name, email address, and message, and where you include them, your phone number, location, service category, and any photos you attach. We may also collect basic, non-identifying analytics about how the site is used.'] },
      { heading: 'How we use it', paras: ['We use the information you submit to respond to your enquiry and to coordinate the work you ask us to handle, from intake to closeout. We do not sell your information.'] },
      { heading: 'Sharing', paras: ['To coordinate a job, we may share the details necessary to complete it with the vetted contractor assigned to your work order, and with service providers who help us operate (for example, email and hosting providers). We share only what is needed for the purpose.'] },
      { heading: 'Retention', paras: ['We keep submissions and job records for as long as needed to provide the service, maintain documentation, and meet our operating and legal obligations.'] },
      { heading: 'Your choices', paras: ['You can ask us what information we hold about you, or ask us to correct or delete it, by emailing info@dwellwellpropertycare.com. We will respond to reasonable requests.'] },
      { heading: 'Contact', paras: ['Questions about this policy can be sent to info@dwellwellpropertycare.com.', 'DwellWell Property Care LLC, 10941 195th St, Saint Albans, NY 11412.'] },
    ],
  },
  {
    slug: 'terms-of-service',
    eyebrow: 'Legal',
    title: 'Terms of Service',
    meta: 'The terms that govern your use of the DwellWell Property Care website.',
    intro: 'These terms govern your use of this website. By using the site, you agree to them.',
    updated: 'Last updated June 2026',
    sections: [
      { heading: 'Use of the site', paras: ['You may use this site to learn about DwellWell Property Care and to contact us. You agree not to misuse the site or to use it for any unlawful purpose.'] },
      { heading: 'Information on the site', paras: ['The content on this site is provided for general information about our services. Service availability depends on location and contractor coverage, and is confirmed case by case.'] },
      { heading: 'Intellectual property', paras: ['The DwellWell name, logo, and site content are owned by DwellWell Property Care LLC and may not be used without permission.'] },
      { heading: 'Changes', paras: ['We may update these terms from time to time. Continued use of the site after an update means you accept the revised terms.'] },
      { heading: 'Contact', paras: ['Questions about these terms can be sent to info@dwellwellpropertycare.com.', 'DwellWell Property Care LLC, 10941 195th St, Saint Albans, NY 11412.'] },
    ],
  },
  {
    slug: 'service-terms',
    eyebrow: 'Legal',
    title: 'Service Terms',
    meta: 'How DwellWell Property Care coordinates work as the managed operator of record.',
    intro: 'These terms describe how DwellWell coordinates the work you ask us to handle as the managed operator of record.',
    updated: 'Last updated June 2026',
    sections: [
      { heading: 'The operator model', paras: ['DwellWell is the managed operator of record. You submit a work order; we coordinate dispatch, management, documentation, and closeout with vetted contractors, and you deal with DwellWell throughout.'] },
      { heading: 'Scope and approval', paras: ['Work is scoped per work order. We send a quote for your approval, and work proceeds once you have approved the cost.'] },
      { heading: 'Coverage', paras: ['Service availability depends on location and contractor coverage. We confirm coverage for your area before committing to a job.'] },
      { heading: 'Documentation', paras: ['Each job is closed with a record, including photos and written confirmation, as part of how we coordinate the work.'] },
      { heading: 'Rework and resolution', paras: ['If something is not right after a completed job, tell us. DwellWell coordinates the fix and stays your single point of contact until the issue is resolved.'] },
      { heading: 'Contact', paras: ['Questions about these terms can be sent to info@dwellwellpropertycare.com.'] },
    ],
  },
  {
    slug: 'coverage-limitations',
    eyebrow: 'Legal',
    title: 'Coverage & Limitations',
    meta: 'Where DwellWell Property Care coordinates work, and the limitations on service availability.',
    intro: 'This page explains where DwellWell coordinates work and the limitations on availability.',
    updated: 'Last updated June 2026',
    sections: [
      { heading: 'Coverage', paras: ['Multi-state coverage across the US and expanding.'] },
      { heading: 'Confirmed case by case', paras: ['Service availability depends on location and contractor coverage. Contact us to confirm your area before relying on availability for a specific property.'] },
      { heading: 'Limitations', paras: ['Listing a service on this site is not a commitment that it is available in a given area at a given time. Availability is confirmed per request.'] },
      { heading: 'Contact', paras: ['To confirm coverage for your area, contact info@dwellwellpropertycare.com.'] },
    ],
  },

  // GATED shell: built but unpublished and unlinked until counsel signs off.
  // Deliberately contains no warranty terms, timeframes, conditions, or guarantees.
  {
    slug: 'warranty-rework',
    eyebrow: 'Legal',
    title: 'Warranty & Rework',
    meta: 'DwellWell Property Care warranty and rework terms.',
    intro: 'Warranty and rework terms are under review and are not yet published.',
    updated: 'Not yet published',
    sections: [
      { heading: 'Under review', paras: ['This page is a placeholder. Warranty and rework terms have not been published. Nothing on this site should be read as a warranty, guarantee, or commitment to a timeframe.'] },
    ],
    gated: true,
  },
];

export { FINALIZING };
