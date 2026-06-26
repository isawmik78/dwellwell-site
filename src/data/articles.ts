// Resources articles, ported from /project/Article-*.dc.html and Resources.dc.html.
// One source of truth: the hub grid and the dynamic article route both read here.

export type Block =
  | { t: 'p'; c: string }
  | { t: 'h2'; c: string }
  | { t: 'callout'; c: string }
  | { t: 'ul'; c: string[] };

export interface Related {
  title: string;
  slug: string;
}

export interface Article {
  slug: string;
  category: string;
  title: string;
  /** Hub-card excerpt. */
  excerpt: string;
  /** Meta description. */
  meta: string;
  /** Lead paragraph under the title. */
  dek: string;
  blocks: Block[];
  related: Related[];
}

export const ARTICLES: Article[] = [
  {
    slug: 'maintenance-checklist',
    category: 'Residential maintenance',
    title: "The property manager's maintenance checklist",
    excerpt: 'A standing checklist for keeping occupied properties in good repair across the year, before small issues turn into expensive ones.',
    meta: 'A standing seasonal maintenance checklist for property managers: what to inspect across the year on occupied properties, and what to hand off to a coordinated operator.',
    dek: 'A standing checklist beats reactive repairs every time. Here is what we keep an eye on across an occupied portfolio, and what is worth handing off.',
    blocks: [
      { t: 'p', c: "Most maintenance problems are cheap when you catch them early and expensive when you don't. A slow leak is a cartridge today and a ceiling next quarter. The point of a checklist isn't to teach you the work; it's to make sure nothing quietly slips while you're handling everything else." },
      { t: 'h2', c: 'Run it by season, not by emergency' },
      { t: 'p', c: "Reactive maintenance is the most expensive way to run a property. Tie inspections to the calendar so the obvious failures get caught on your schedule instead of a tenant's. We coordinate recurring visits the same way, so the routine items never depend on someone remembering." },
      { t: 'h2', c: 'The standing checklist' },
      { t: 'ul', c: ['Roof, gutters, and drainage before each wet season', 'HVAC filters and service ahead of summer and winter', 'Plumbing fixtures, shutoffs, and visible leaks', 'Smoke and CO detectors, and GFCI outlets', 'Exterior caulking, paint, and weather sealing', 'Common areas: lighting, handrails, and trip hazards', 'Landscaping and grading directed away from the foundation'] },
      { t: 'h2', c: 'What to hand off' },
      { t: 'p', c: 'The items that need a licensed trade, a paper trail, or a fast turnaround are the ones worth coordinating through a single operator. You send the work order; the assessment, the contractor, the documentation, and the closeout come back as one record.' },
      { t: 'callout', c: 'DwellWell coordinates recurring and one-off residential maintenance from intake to closeout, with every visit documented. Send a work order and we handle the rest.' },
    ],
    related: [
      { title: 'Preventive maintenance for rental properties', slug: 'preventive-maintenance' },
      { title: 'Preparing a property for new tenants (turn / make-ready)', slug: 'make-ready' },
    ],
  },
  {
    slug: 'preservation-guide',
    category: 'Property preservation',
    title: 'How property preservation works: a guide for lenders and investors',
    excerpt: 'What preservation covers, why documentation matters, and how a coordinated operator keeps vacant assets compliant and marketable.',
    meta: 'A guide to property preservation for lenders and investors: what preservation covers on vacant and REO assets, why documentation is the product, and how coverage is confirmed.',
    dek: 'Preservation keeps a vacant asset secure, compliant, and marketable. The difference between a good preservation operator and a liability is documentation.',
    blocks: [
      { t: 'p', c: 'When a property goes vacant, the clock starts. Unsecured entries, code violations, freeze damage, and deferred decay all compound, and they all land on whoever holds the asset. Preservation is the work that keeps a vacant property from becoming a problem, and the record that proves it was handled.' },
      { t: 'h2', c: 'What preservation covers' },
      { t: 'p', c: 'The core scope is consistent across most vacant and REO assets, even when the sequence changes by property.' },
      { t: 'ul', c: ['Securing and board-up of entries', 'Lock changes and access control', 'Debris removal and cleanouts', 'Interior cleaning', 'Lawn and grounds maintenance', 'Winterisation of plumbing and systems', 'Repairs that protect condition', 'Inspections and condition reporting'] },
      { t: 'h2', c: 'Why documentation is the product' },
      { t: 'p', c: 'For a lender or asset manager, the work itself is only half of it. The other half is a complete, dated, photographed record that satisfies investors, insurers, and compliance. A job that was done but not documented is, for your purposes, a job that creates risk. Every DwellWell job closes with that record attached.' },
      { t: 'h2', c: 'Coverage is confirmed case by case' },
      { t: 'p', c: "Availability depends on location and contractor coverage. We confirm your area before committing, rather than promising blanket reach we can't stand behind." },
      { t: 'callout', c: 'DwellWell coordinates property preservation across the US, confirmed case by case, with the documentation lenders and asset managers require. Every job is closed with a complete record.' },
    ],
    related: [
      { title: 'Winterisation for vacant properties', slug: 'winterisation-vacant' },
      { title: "What to expect: DwellWell's work-order process explained", slug: 'work-order-process' },
    ],
  },
  {
    slug: 'work-order-process',
    category: 'How we work',
    title: "What to expect: DwellWell's work-order process explained",
    excerpt: 'From the first work order to closeout, here is exactly how a job moves through DwellWell.',
    meta: "DwellWell's work-order process explained: how a job moves from a single point of contact through assessment, quoting, dispatch, documentation, and closeout.",
    dek: 'From the first work order to closeout, here is exactly how a job moves through DwellWell, and where you sit in it.',
    blocks: [
      { t: 'p', c: "You should never have to wonder where a job stands or who is responsible for it. The process is the same every time, whether it's one repair or a portfolio of vacant assets." },
      { t: 'h2', c: 'One channel in' },
      { t: 'p', c: 'You submit a work order through a single point of contact. No chasing contractors, no managing a roster of vendors. From that moment the job is ours to move.' },
      { t: 'h2', c: 'Assess, quote, approve' },
      { t: 'p', c: "We scope the work and match it to a vetted contractor, then send a quote for your approval. Nothing proceeds, and nothing is billed, before you've signed off on the cost." },
      { t: 'h2', c: 'Dispatch and document' },
      { t: 'p', c: 'The contractor is scheduled and sent on site. The work is carried out and recorded with photos and notes as it happens, not reconstructed afterward.' },
      { t: 'h2', c: 'Closeout, in one record' },
      { t: 'p', c: "You receive a complete closeout record and a single invoice. If an issue comes up afterward, we stay the point of contact until it's resolved. You deal with us, not the contractor." },
      { t: 'callout', c: "That's the whole model: one contact, vetted contractors, every job documented, coordinated from intake to closeout." },
    ],
    related: [
      { title: "The property manager's maintenance checklist", slug: 'maintenance-checklist' },
      { title: 'How property preservation works: a guide for lenders and investors', slug: 'preservation-guide' },
    ],
  },
  {
    slug: 'winterisation-vacant',
    category: 'Property preservation',
    title: 'Winterisation for vacant properties',
    excerpt: 'What winterisation protects, when to schedule it, and what a documented winterisation should include.',
    meta: 'Winterisation for vacant properties: what the work protects, when to schedule it ahead of a freeze, and what a documented winterisation should include.',
    dek: "A frozen pipe in a vacant property is a five-figure problem that a scheduled winterisation prevents. Here's what the work protects and what a documented job includes.",
    blocks: [
      { t: 'p', c: "Vacant properties don't have anyone to notice a dropping temperature or a dripping line. By the time damage is found, it has usually been spreading for weeks. Winterisation removes the water that does the damage and documents that the property was protected before the cold set in." },
      { t: 'h2', c: 'What winterisation protects' },
      { t: 'p', c: 'The goal is simple: no standing water in any system that can freeze, expand, and burst. That covers supply lines, drains, traps, water heaters, and fixtures.' },
      { t: 'ul', c: ['Supply lines drained and shut off', 'Water heater drained', 'Traps and drains protected with anti-freeze', 'Fixtures and appliances cleared', 'Exterior spigots and irrigation cleared'] },
      { t: 'h2', c: 'When to schedule it' },
      { t: 'p', c: 'Ahead of the first hard freeze for the region, not after. In colder markets that means getting vacant assets winterised early in the season rather than reacting to a forecast. Coverage and timing depend on location, which we confirm case by case.' },
      { t: 'h2', c: 'What a documented winterisation includes' },
      { t: 'p', c: 'A winterisation you can rely on comes with dated photos of each step and a closeout record. That record is what protects you if a freeze claim is ever questioned.' },
      { t: 'callout', c: 'DwellWell coordinates winterisation as part of property preservation, documented and closed with a complete record. Contact us to confirm coverage for your area.' },
    ],
    related: [
      { title: 'How property preservation works: a guide for lenders and investors', slug: 'preservation-guide' },
      { title: 'Preventive maintenance for rental properties', slug: 'preventive-maintenance' },
    ],
  },
  {
    slug: 'make-ready',
    category: 'Residential maintenance',
    title: 'Preparing a property for new tenants (turn / make-ready)',
    excerpt: 'A make-ready that moves fast without cutting corners: the work that matters between tenants.',
    meta: 'Preparing a rental property for new tenants: a make-ready turn that moves fast without cutting corners, in the right order, with the condition documented.',
    dek: "A make-ready is a race against vacancy, but speed that cuts corners just becomes next month's work order. Here's the turn that holds up.",
    blocks: [
      { t: 'p', c: "Every day a unit sits empty is rent you don't get back. The pressure is to turn it fast, and the trap is turning it twice because the first pass missed something. A make-ready that's coordinated and documented gets the unit leased without leaving problems for the new tenant to find." },
      { t: 'h2', c: 'The make-ready, in order' },
      { t: 'ul', c: ['Cleanout and deep clean', 'Repairs: walls, floors, fixtures, and hardware', 'Paint and surface refinishing', 'Appliance and systems check', 'Final clean and photo record'] },
      { t: 'h2', c: 'Sequence matters' },
      { t: 'p', c: 'Paint after repairs, deep clean after paint, photograph after the final clean. Running the work out of order is how a unit gets touched twice. When it is coordinated through one operator, the sequence and the scheduling are handled for you.' },
      { t: 'h2', c: 'Document the starting condition' },
      { t: 'p', c: "The make-ready record isn't just a punch list. Photographs of the unit's condition at move-in protect you in any later deposit dispute. Every DwellWell turn closes with that documentation in hand." },
      { t: 'callout', c: 'DwellWell coordinates make-ready turns end to end, repairs, paint, cleaning, and the photo record, on one work order. Send it once and we sequence the rest.' },
    ],
    related: [
      { title: "The property manager's maintenance checklist", slug: 'maintenance-checklist' },
      { title: 'Preventive maintenance for rental properties', slug: 'preventive-maintenance' },
    ],
  },
  {
    slug: 'preventive-maintenance',
    category: 'Residential maintenance',
    title: 'Preventive maintenance for rental properties',
    excerpt: 'The maintenance that prevents emergencies, protects the asset, and keeps good tenants in place.',
    meta: 'Preventive maintenance for rental properties: where prevention pays most, how it protects the asset, and how it keeps good tenants in place.',
    dek: "Preventive maintenance is the cheapest line item you'll ever run, because it's the one that stops the expensive ones. Here's where it pays.",
    blocks: [
      { t: 'p', c: 'Emergency repairs cost more than scheduled ones, every time. They come with after-hours rates, collateral damage, and a frustrated tenant. Preventive maintenance trades a small, predictable cost now for the large, unpredictable one later, and it keeps good tenants from leaving over problems that never should have happened.' },
      { t: 'h2', c: 'Where prevention pays most' },
      { t: 'ul', c: ['HVAC service before peak season', 'Water heaters, shutoffs, and visible plumbing', 'Roof and gutter checks before wet weather', 'Seals, caulking, and weatherproofing', 'Detectors, alarms, and electrical safety'] },
      { t: 'h2', c: 'Protecting the asset, not just the month' },
      { t: 'p', c: "Deferred maintenance doesn't disappear; it accrues. Every skipped service shortens the life of a system and lowers the value of the property. A standing preventive schedule protects the asset itself, not just this month's operating budget." },
      { t: 'h2', c: 'Keeping tenants in place' },
      { t: 'p', c: 'Tenants renew when a property is well run. Quick, documented responses and maintenance that gets ahead of problems are what turnover-resistant portfolios are built on. Coordinating it through one operator means it actually happens on schedule.' },
      { t: 'callout', c: 'DwellWell coordinates recurring preventive maintenance across residential portfolios, documented and closed on every visit. Start a conversation about a schedule for your properties.' },
    ],
    related: [
      { title: "The property manager's maintenance checklist", slug: 'maintenance-checklist' },
      { title: 'Preparing a property for new tenants (turn / make-ready)', slug: 'make-ready' },
    ],
  },
];

export const articleBySlug = (slug: string): Article | undefined =>
  ARTICLES.find((a) => a.slug === slug);
