import type { StaticImageData } from "next/image";
import { media } from "./media";

/**
 * SAMPLE CONTENT. NOT JP2 PROJECTS.
 * ---------------------------------------------------------------
 * The three entries below exist to show how a completed project
 * record is presented. They are generic installation types, not
 * claims about work JP2 has carried out. Every card and detail page
 * renders a visible "Sample entry" marker while `sample` is true.
 *
 * When JP2 supplies real project records, replace the fields and set
 * `sample: false` to remove the marker.
 */

export type ProjectSpec = {
  label: string;
  value: string;
};

export type ProjectOutcome = {
  label: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  summary: string;
  overview: string[];
  solution: string;
  specs: ProjectSpec[];
  outcomes: ProjectOutcome[];
  cover: StaticImageData;
  coverAlt: string;
  gallery: { image: StaticImageData; alt: string }[];
  sample: boolean;
};

const PLACEHOLDER_LOCATION = "Location to be confirmed";
const PLACEHOLDER_YEAR = "Year";

export const projects: Project[] = [
  {
    slug: "commercial-rooftop-installation",
    title: "Commercial Rooftop Installation",
    category: "Commercial",
    location: PLACEHOLDER_LOCATION,
    year: PLACEHOLDER_YEAR,
    summary:
      "A rooftop photovoltaic array serving a commercial building that needs supply to hold through the working day.",
    overview: [
      "This entry shows how a commercial rooftop project is presented once JP2 supplies the record. The opening paragraph sets out the brief: what the building does, how it uses power and what was failing before the work began.",
      "The second paragraph covers the constraints the design had to respect, such as available roof area, structural limits, existing distribution and the switching arrangement the client already had in place.",
    ],
    solution:
      "Describe the system JP2 designed and installed here, including array size, inverter arrangement, storage where applicable and how the installation ties into the existing distribution board.",
    specs: [
      { label: "System type", value: "Replace with system type" },
      { label: "Capacity", value: "Replace with installed capacity" },
      { label: "Storage", value: "Replace with storage detail" },
      { label: "Scope", value: "Design, supply and installation" },
    ],
    outcomes: [
      {
        label: "Supply continuity",
        body: "Replace with the continuity outcome JP2 recorded for this site.",
      },
      {
        label: "Running cost",
        body: "Replace with the running cost effect the client reported after handover.",
      },
      {
        label: "Handover",
        body: "Replace with the documentation and training provided at handover.",
      },
    ],
    cover: media.arrayRows,
    coverAlt: "Rows of solar panels angled toward the sun on a commercial installation",
    gallery: [
      { image: media.arrayClose, alt: "Close view of photovoltaic modules in a mounted row" },
      { image: media.arrayAerial, alt: "Overhead view of two solar panel arrays" },
    ],
    sample: true,
  },
  {
    slug: "residential-backup-system",
    title: "Residential Backup System",
    category: "Residential",
    location: PLACEHOLDER_LOCATION,
    year: PLACEHOLDER_YEAR,
    summary:
      "A home installation combining solar generation with storage so essential circuits stay live through an outage.",
    overview: [
      "This entry shows how a residential record reads. Set out the household brief here: which circuits had to stay on, how long they needed to run and what the family was relying on before the system went in.",
      "Follow with the survey findings, including roof orientation and condition, available space for the inverter and batteries, and how the existing wiring was arranged.",
    ],
    solution:
      "Describe the array, inverter and battery configuration JP2 specified, and how essential circuits were separated so the right loads are carried during an outage.",
    specs: [
      { label: "System type", value: "Replace with system type" },
      { label: "Capacity", value: "Replace with installed capacity" },
      { label: "Storage", value: "Replace with storage detail" },
      { label: "Scope", value: "Survey, design and installation" },
    ],
    outcomes: [
      {
        label: "Essential loads",
        body: "Replace with the circuits the system now carries during an outage.",
      },
      {
        label: "Daily performance",
        body: "Replace with the performance the household observed after commissioning.",
      },
      {
        label: "Support",
        body: "Replace with the support arrangement agreed with the client.",
      },
    ],
    cover: media.residentialRoof,
    coverAlt: "Rooftop solar panels on a brick family home under clear sky",
    gallery: [
      { image: media.batteryBank, alt: "Battery cells arranged in an energy storage rack" },
      { image: media.installationDetail, alt: "Installers fitting a solar module into its frame" },
    ],
    sample: true,
  },
  {
    slug: "ground-mounted-array",
    title: "Ground Mounted Array",
    category: "Industrial",
    location: PLACEHOLDER_LOCATION,
    year: PLACEHOLDER_YEAR,
    summary:
      "A ground mounted installation for a site with the land available to carry a larger generating capacity.",
    overview: [
      "This entry shows how a larger installation is documented. Open with the operational profile of the facility, the loads that drive consumption and the reason a ground mounted approach suited the site.",
      "Then cover ground conditions, mounting structure, cable runs back to the plant room and how the array was integrated with existing supply.",
    ],
    solution:
      "Describe the array layout, mounting system, inverter arrangement and protection scheme JP2 specified, along with how the installation was staged around site operations.",
    specs: [
      { label: "System type", value: "Replace with system type" },
      { label: "Capacity", value: "Replace with installed capacity" },
      { label: "Mounting", value: "Replace with mounting detail" },
      { label: "Scope", value: "Design, supply, installation and commissioning" },
    ],
    outcomes: [
      {
        label: "Generation",
        body: "Replace with the generation figures JP2 recorded after commissioning.",
      },
      {
        label: "Site operations",
        body: "Replace with the effect on site operations during and after installation.",
      },
      {
        label: "Maintenance",
        body: "Replace with the maintenance arrangement put in place.",
      },
    ],
    cover: media.arrayField,
    coverAlt: "Ground mounted solar array standing in an open field",
    gallery: [
      { image: media.groundMountArray, alt: "Steel framed solar array seen from ground level" },
      { image: media.technicalInspection, alt: "Engineer reviewing readings on a laptop at a technical installation" },
    ],
    sample: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
