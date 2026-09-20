import type { StaticImageData } from "next/image";
import { media } from "./media";

/**
 * EDITABLE PLACEHOLDER CONTENT.
 * These categories describe the kind of work a solar and energy company
 * typically delivers. None of them are presented as confirmed JP2
 * offerings. Confirm the real service list with JP2, then set
 * `confirmed: true` on the entries that are accurate and delete the rest.
 */

export type Solution = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  points: string[];
  image: StaticImageData;
  imageAlt: string;
  confirmed: boolean;
};

export const solutions: Solution[] = [
  {
    slug: "solar-energy",
    title: "Solar Energy",
    summary:
      "Photovoltaic systems specified around the load they are built to carry, from array layout through to protection and monitoring.",
    detail:
      "A solar system is only as good as the design behind it. Array sizing, inverter selection, cable routing and protection are set against how the site actually consumes power, not against a generic package.",
    points: ["Array design", "Inverter specification", "Protection and monitoring"],
    image: media.solarArrayWide,
    imageAlt: "Rows of photovoltaic panels on a solar array under an open sky",
    confirmed: false,
  },
  {
    slug: "residential",
    title: "Residential Solutions",
    summary:
      "Power for homes and estates, planned around daily consumption patterns and the realities of local grid supply.",
    detail:
      "Homes have predictable load peaks. Sizing a residential system well means understanding those peaks, the hours that need covering during an outage and the space available on the roof.",
    points: ["Load profiling", "Rooftop layout", "Backup planning"],
    image: media.residentialRoof,
    imageAlt: "Solar panels installed on the pitched roof of a family home",
    confirmed: false,
  },
  {
    slug: "commercial",
    title: "Commercial Solutions",
    summary:
      "Systems for offices, retail and mixed use buildings where an interruption to supply carries a direct commercial cost.",
    detail:
      "Commercial buildings run equipment that does not tolerate an unplanned shutdown. Designs are built around continuity, safe switching and a clear account of what happens when the grid goes down.",
    points: ["Continuity planning", "Phased installation", "Metering and reporting"],
    image: media.urbanRooftops,
    imageAlt: "Rooftops across a dense urban district with a solar installation on one building",
    confirmed: false,
  },
  {
    slug: "industrial",
    title: "Industrial Solutions",
    summary:
      "Higher capacity installations for facilities running demanding loads that need predictable, sustained supply.",
    detail:
      "Industrial sites bring motor loads, harmonics and long operating hours. These systems are engineered with headroom, proper protection coordination and documentation that an in house team can work from.",
    points: ["Capacity headroom", "Protection coordination", "As built documentation"],
    image: media.groundMountArray,
    imageAlt: "Large ground mounted solar array supported on steel frames",
    confirmed: false,
  },
  {
    slug: "electrical",
    title: "Electrical Solutions",
    summary:
      "Distribution, protection and installation work that supports the energy system and the building around it.",
    detail:
      "An energy system lives inside an electrical installation. Boards, changeover arrangements, earthing and cable management all determine whether the result is safe and serviceable years later.",
    points: ["Distribution boards", "Changeover and protection", "Earthing and cabling"],
    image: media.electricalPanel,
    imageAlt: "Technician working on circuit breakers inside an electrical distribution panel",
    confirmed: false,
  },
  {
    slug: "energy-storage",
    title: "Energy Storage",
    summary:
      "Battery capacity sized to bridge outages and hold usable power through the hours that matter most.",
    detail:
      "Storage is where most systems are over promised. Capacity is matched to the loads that genuinely need to stay on, with clear expectations about runtime, depth of discharge and service life.",
    points: ["Capacity sizing", "Runtime expectations", "Battery management"],
    image: media.batteryBank,
    imageAlt: "Bank of battery cells arranged in rows inside an energy storage installation",
    confirmed: false,
  },
];
