// Services content, ported from /project/*.dc.html and restyled to global.css tokens.
// One source of truth: the two overview pages and the dynamic detail route both
// read from here. HVAC and Electrical are gated (built but unpublished/unlinked):
// they are excluded from getStaticPaths and from the residential tiles until ops
// confirms specialist/regulated trades. Flip `gated` to publish.

export type LineKey = 'residential' | 'preservation';

export interface Line {
  key: LineKey;
  label: string;
  href: string;
  eyebrow: string;
  title: string;
  sub: string;
  intro: string;
}

export interface Service {
  slug: string;
  line: LineKey;
  name: string;
  /** Short line used on the overview tile. */
  tileDesc: string;
  descr: string;
  whoNeeds: string;
  includes: string[];
  gated?: boolean;
}

export const LINES: Record<LineKey, Line> = {
  residential: {
    key: 'residential',
    label: 'Residential maintenance',
    href: '/services/residential-maintenance',
    eyebrow: 'Residential property maintenance',
    title: 'Maintenance for occupied homes.',
    sub: 'Everyday repairs and upkeep for occupied homes, rentals, and multi-unit residential property, coordinated and documented from intake to closeout.',
    intro: 'For homeowners, landlords, and property managers responsible for occupied residential property.',
  },
  preservation: {
    key: 'preservation',
    label: 'Property preservation',
    href: '/services/property-preservation',
    eyebrow: 'Property preservation',
    title: 'Preservation for vacant assets.',
    sub: 'DwellWell coordinates property preservation: securing, winterisation, debris removal, condition reporting, and vacant-property maintenance, with the documentation lenders and asset managers require. Every job is closed with a complete record.',
    intro: 'For lenders, investors, and asset managers responsible for vacant, foreclosed, and REO property.',
  },
};

export const SERVICES: Service[] = [
  // --- Residential (publishable) ---
  {
    slug: 'property-repairs-maintenance',
    line: 'residential',
    name: 'Property Repairs & General Maintenance',
    tileDesc: 'General repairs: leaks, damaged walls, floors, surfaces, and broken fixtures and appliances.',
    descr: 'General repairs and upkeep that keep occupied homes in working order. DwellWell coordinates work on leaks, damaged walls, floors, and surfaces, and broken fixtures and appliances. Every job is managed and documented from the first work order to closeout.',
    whoNeeds: 'Homeowners, landlords, and property managers responsible for occupied residential property who want everyday repairs handled by one accountable operator.',
    includes: ['Leak detection and repair', 'Wall, floor, and surface repair', 'Fixture repair and replacement', 'Appliance troubleshooting and repair', 'Doors, windows, and hardware', 'General handyman work'],
  },
  {
    slug: 'residential-cleaning',
    line: 'residential',
    name: 'Residential & Common Area Cleaning',
    tileDesc: 'Units and multi-unit common areas: hallways, lobbies, and stairwells.',
    descr: 'Cleaning for individual units and the shared spaces of multi-unit residential property. DwellWell coordinates routine and turnover cleaning, keeping common areas presentable and recorded. Every visit is documented through to closeout.',
    whoNeeds: 'Landlords and property managers of multi-unit residential buildings who need units and common areas kept clean on a reliable schedule.',
    includes: ['Unit cleaning and turnovers', 'Hallways and corridors', 'Lobbies and entryways', 'Stairwells and landings', 'Shared amenity spaces', 'Scheduled recurring service'],
  },
  {
    slug: 'landscaping-exterior',
    line: 'residential',
    name: 'Landscaping & Exterior Maintenance',
    tileDesc: 'Lawn care, tree and shrub trimming, planting, and curb-appeal upkeep.',
    descr: 'Exterior upkeep that protects curb appeal and the condition of the grounds. DwellWell coordinates lawn care, trimming, planting, and seasonal maintenance across residential property. Each visit is documented from request to closeout.',
    whoNeeds: 'Homeowners, landlords, and property managers who want the grounds and exterior of residential property maintained consistently.',
    includes: ['Lawn mowing and edging', 'Tree and shrub trimming', 'Planting and bed maintenance', 'Seasonal cleanup', 'Curb-appeal upkeep', 'Recurring grounds service'],
  },
  {
    slug: 'interior-exterior-painting',
    line: 'residential',
    name: 'Interior & Exterior Painting',
    tileDesc: 'Touch-ups, full painting, exterior work for homes and fences, and surface refinishing.',
    descr: 'Painting and surface refinishing for residential property, inside and out. DwellWell coordinates touch-ups, full repaints, and exterior work on homes, fences, and structures. Every job is managed and documented to closeout.',
    whoNeeds: 'Homeowners, landlords, and property managers preparing units, refreshing interiors, or protecting exterior surfaces on residential property.',
    includes: ['Interior touch-ups and repaints', 'Exterior house painting', 'Fences and outbuildings', 'Surface preparation', 'Surface refinishing', 'Color and finish coordination'],
  },

  // --- Residential (GATED: specialist/regulated trades, not published or linked) ---
  {
    slug: 'hvac-maintenance',
    line: 'residential',
    name: 'HVAC Maintenance',
    tileDesc: 'Coordinated heating and cooling maintenance by licensed trades.',
    descr: 'Coordinated maintenance and repair of heating and cooling systems for residential property, carried out by licensed trades. DwellWell coordinates the work and documents it from intake to closeout.',
    whoNeeds: 'Homeowners, landlords, and property managers who need heating and cooling systems maintained by licensed trades.',
    includes: ['Heating system maintenance', 'Cooling system maintenance', 'Filter and component service', 'Diagnostics and repair', 'Licensed-trade coordination', 'Documented closeout record'],
    gated: true,
  },
  {
    slug: 'electrical-maintenance',
    line: 'residential',
    name: 'Electrical Maintenance & Repairs',
    tileDesc: 'Coordinated electrical maintenance and repair by licensed trades.',
    descr: 'Coordinated electrical maintenance and repair for residential property, carried out by licensed trades. DwellWell coordinates the work and documents it from intake to closeout.',
    whoNeeds: 'Homeowners, landlords, and property managers who need electrical work handled by licensed trades.',
    includes: ['Fixture and outlet repair', 'Switch and panel service', 'Diagnostics and troubleshooting', 'Code-aware repairs', 'Licensed-trade coordination', 'Documented closeout record'],
    gated: true,
  },

  // --- Preservation (full scope, publishable) ---
  {
    slug: 'securing-board-up',
    line: 'preservation',
    name: 'Property Securing & Board-Up',
    tileDesc: 'Securing and board-up of doors, windows, and points of entry.',
    descr: 'Securing vacant property against unauthorized entry and weather. DwellWell coordinates board-up and securing of doors, windows, and other points of entry. Every job is closed with a complete, documented record for lenders and asset managers.',
    whoNeeds: 'Lenders, investors, and asset managers responsible for vacant, foreclosed, or REO property that needs to be secured and documented.',
    includes: ['Door and window board-up', 'Securing points of entry', 'Emergency securing', 'Damage and condition photos', 'Materials and labor coordination', 'Documented closeout record'],
  },
  {
    slug: 'lock-changes',
    line: 'preservation',
    name: 'Lock Changes & Property Security',
    tileDesc: 'Rekeys and lock changes to control access to vacant property.',
    descr: 'Controlling access to vacant property through rekeys and lock changes. DwellWell coordinates lock changes, lockbox installation, and access control. Every job is documented and closed with a complete record.',
    whoNeeds: 'Lenders and asset managers who need access to vacant property controlled and recorded for compliance.',
    includes: ['Lock changes and rekeys', 'Lockbox installation', 'Access control coordination', 'Key management', 'Condition photos', 'Documented closeout record'],
  },
  {
    slug: 'debris-removal',
    line: 'preservation',
    name: 'Debris Removal & Cleanouts',
    tileDesc: 'Debris removal and full cleanouts of interiors and exteriors.',
    descr: 'Clearing interiors and exteriors of vacant property. DwellWell coordinates debris removal and full cleanouts, including hauling and disposal. Every job is documented before and after, and closed with a complete record.',
    whoNeeds: 'Lenders, investors, and asset managers preparing vacant or REO property for inspection, sale, or maintenance.',
    includes: ['Interior cleanouts', 'Exterior debris removal', 'Hauling and disposal', 'Personal-property handling', 'Before and after photos', 'Documented closeout record'],
  },
  {
    slug: 'interior-cleaning',
    line: 'preservation',
    name: 'Interior Cleaning',
    tileDesc: 'Interior cleaning to bring vacant units to a presentable condition.',
    descr: 'Bringing vacant interiors to a presentable, inspection-ready condition. DwellWell coordinates interior cleaning across vacant units and properties. Every visit is documented and closed with a complete record.',
    whoNeeds: 'Lenders and asset managers who need vacant interiors cleaned and documented ahead of inspection or sale.',
    includes: ['Whole-property interior cleaning', 'Kitchens and bathrooms', 'Floors and surfaces', 'Post-cleanout cleaning', 'Condition photos', 'Documented closeout record'],
  },
  {
    slug: 'lawn-maintenance',
    line: 'preservation',
    name: 'Lawn Maintenance',
    tileDesc: 'Lawn and grounds maintenance to keep vacant property compliant.',
    descr: 'Keeping the grounds of vacant property maintained and compliant. DwellWell coordinates recurring lawn and grounds maintenance. Every visit is documented and closed with a complete record.',
    whoNeeds: 'Lenders, investors, and asset managers responsible for keeping vacant property grounds maintained and code-compliant.',
    includes: ['Lawn mowing and edging', 'Overgrowth clearing', 'Recurring grounds service', 'Municipal-compliance upkeep', 'Condition photos', 'Documented closeout record'],
  },
  {
    slug: 'winterisation',
    line: 'preservation',
    name: 'Winterisation',
    tileDesc: 'Winterisation of plumbing and systems against seasonal damage.',
    descr: 'Protecting vacant property systems against seasonal damage. DwellWell coordinates winterisation of plumbing and related systems. Every job is documented and closed with a complete record.',
    whoNeeds: 'Lenders and asset managers protecting vacant property from freeze and seasonal damage in colder regions.',
    includes: ['Plumbing winterisation', 'Water shut-off and draining', 'System protection', 'Anti-freeze application', 'Condition photos', 'Documented closeout record'],
  },
  {
    slug: 'property-repairs',
    line: 'preservation',
    name: 'Property Repairs',
    tileDesc: 'Repairs needed to protect and preserve the condition of the asset.',
    descr: 'Repairs that protect and preserve the condition of vacant assets. DwellWell coordinates the repair work needed to keep property in stable, marketable condition. Every job is documented and closed with a complete record.',
    whoNeeds: 'Lenders, investors, and asset managers who need vacant or REO property repaired and the work documented.',
    includes: ['Structural and surface repairs', 'Roof and exterior repairs', 'Plumbing and basic systems', 'Damage mitigation', 'Before and after photos', 'Documented closeout record'],
  },
  {
    slug: 'inspections-reporting',
    line: 'preservation',
    name: 'Property Inspections & Condition Reporting',
    tileDesc: 'Inspections and condition reporting with the documentation required.',
    descr: 'Inspections and reporting that give lenders and asset managers a clear record of property condition. DwellWell coordinates inspections and produces condition reports with the documentation required. Every report is delivered as part of a complete closeout record.',
    whoNeeds: 'Lenders, investors, and asset managers who require documented, compliance-ready reporting on vacant property condition.',
    includes: ['Interior and exterior inspections', 'Condition reporting', 'Photo documentation', 'Occupancy checks', 'Compliance-ready records', 'Documented closeout record'],
  },
];

/** Published (non-gated) services for a line, in source order. */
export const publishedByLine = (line: LineKey): Service[] =>
  SERVICES.filter((s) => s.line === line && !s.gated);
