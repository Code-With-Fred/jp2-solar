/**
 * EDITABLE PLACEHOLDER CONTENT.
 * ------------------------------------------------------------------
 * Positioning statements and service principles only. Nothing below
 * asserts a statistic, certification, award, client or year count.
 * Replace with JP2's official company profile when it is available.
 */

export type Pillar = {
  index: string;
  title: string;
  body: string;
};

/** Trust section directly beneath the hero. */
export const trustPillars: Pillar[] = [
  {
    index: "01",
    title: "Reliable Energy Solutions",
    body: "Systems specified to carry the load they are given, so supply holds when it is needed most.",
  },
  {
    index: "02",
    title: "Professional Approach",
    body: "Clear scope, documented decisions and work carried out to a standard that can be inspected.",
  },
  {
    index: "03",
    title: "Quality Focused Delivery",
    body: "Component selection and workmanship treated as the parts of the job that determine service life.",
  },
  {
    index: "04",
    title: "Customer Support",
    body: "A route back to the people who built the system, from commissioning through to later service.",
  },
];

/** Why JP2 section. */
export const principles: Pillar[] = [
  {
    index: "01",
    title: "Professional Approach",
    body: "Every enquiry is treated as an engineering question before it is treated as a sale. The brief is established first, then the system is specified against it.",
  },
  {
    index: "02",
    title: "Tailored Energy Solutions",
    body: "No two sites draw power the same way. Designs follow the consumption pattern of the building rather than a fixed package.",
  },
  {
    index: "03",
    title: "Quality Focus",
    body: "Components are chosen for service life and serviceability. Installation standards are held through every stage of the work.",
  },
  {
    index: "04",
    title: "Clear Communication",
    body: "Scope, timelines and what a system will and will not do are set out plainly, so there are no surprises at handover.",
  },
  {
    index: "05",
    title: "Ongoing Support",
    body: "The relationship continues past commissioning, with a clear point of contact for service, expansion and advice.",
  },
];

/** Five step delivery process. */
export const processSteps: Pillar[] = [
  {
    index: "01",
    title: "Consultation",
    body: "We establish what the site needs to run, what is failing today and what a working solution has to achieve.",
  },
  {
    index: "02",
    title: "Assessment",
    body: "A site assessment records load profiles, roof or ground conditions and the constraints the design must respect.",
  },
  {
    index: "03",
    title: "System Design",
    body: "Sizing, components and protection are specified against the assessment and documented before anything is ordered.",
  },
  {
    index: "04",
    title: "Installation",
    body: "The approved design is installed, with workmanship and safety standards applied at every stage of the work.",
  },
  {
    index: "05",
    title: "Support",
    body: "Commissioning, handover and continued support keep the system performing the way it was designed to.",
  },
];

/** About page. Replace wholesale with JP2's official profile. */
export const about = {
  intro: [
    "JP2 Solar Energy works with property owners and businesses that need dependable power. The starting point is always the same question: what does this site actually need to run, and for how long.",
    "This page is prepared as a structure for JP2's official company profile. The headings below are ready for the company description, history and positioning that JP2 provides.",
  ],
  mission: {
    title: "Mission",
    body: "Replace this paragraph with JP2's mission statement. The layout holds roughly forty to sixty words comfortably.",
  },
  vision: {
    title: "Vision",
    body: "Replace this paragraph with JP2's vision statement, describing the position the company intends to hold in the energy market it serves.",
  },
  values: [
    {
      index: "01",
      title: "Integrity",
      body: "Replace with JP2's own definition of this value, or substitute a different value entirely.",
    },
    {
      index: "02",
      title: "Engineering Rigour",
      body: "Replace with JP2's own definition of this value, or substitute a different value entirely.",
    },
    {
      index: "03",
      title: "Accountability",
      body: "Replace with JP2's own definition of this value, or substitute a different value entirely.",
    },
    {
      index: "04",
      title: "Service",
      body: "Replace with JP2's own definition of this value, or substitute a different value entirely.",
    },
  ] as Pillar[],
  story: [
    "Replace this section with the JP2 company story. A short account of how the company started, the market it set out to serve and how the work has developed carries more weight with prospective clients than a list of adjectives.",
    "A second paragraph can cover the kind of work the company focuses on today and the standards it holds itself to. Keep it specific. Specific detail is what separates a credible company page from a generic one.",
  ],
};

/** Service options offered in the enquiry form. */
export const serviceOptions = [
  "Solar Energy",
  "Residential Solutions",
  "Commercial Solutions",
  "Industrial Solutions",
  "Electrical Solutions",
  "Energy Storage",
  "Not sure yet",
];
