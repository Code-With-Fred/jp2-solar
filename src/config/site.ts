/**
 * ------------------------------------------------------------------
 * JP2 Solar Energy - single source of truth for company information.
 * ------------------------------------------------------------------
 * Every value below is either confirmed (the company name) or an
 * intentionally empty placeholder. Nothing here is invented.
 *
 * To go live, fill in the empty strings with the details JP2 supplies.
 * Any field left empty renders as a clearly marked placeholder in the
 * UI rather than as fabricated content.
 */

export type NavItem = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  shortName: string;
  logoSrc: string;
  descriptor: string;
  url: string;
  contact: {
    whatsapp: string;
    phone: string;
    email: string;
    address: {
      line1: string;
      city: string;
      state: string;
      country: string;
    };
  };
  social: {
    linkedin: string;
    instagram: string;
    facebook: string;
    x: string;
  };
  cta: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
    whatsapp: { label: string };
  };
  whatsappMessage: string;
};

export const siteConfig: SiteConfig = {
  /** Confirmed. Always render the company name exactly like this. */
  name: "JP2 Solar Energy",
  /** Used only where the full name will not fit, such as the mobile bar. */
  shortName: "JP2",

  /**
   * Replace with the official JP2 logo when it is provided.
   * Set `logoSrc` to a file in /public and the wordmark is swapped out.
   */
  logoSrc: "",

  /** Short descriptor used in the footer and metadata. */
  descriptor: "Solar and energy solutions",

  /** Canonical origin. Replace with the live domain before launch. */
  url: "https://www.example.com",

  /** TO BE SUPPLIED BY JP2. Leave empty rather than guessing. */
  contact: {
    /** International format, digits only, no plus sign. Example: 2348012345678 */
    whatsapp: "",
    phone: "",
    email: "",
    address: {
      line1: "",
      city: "",
      state: "",
      country: "Nigeria",
    },
  },

  /** TO BE SUPPLIED BY JP2. Empty links are not rendered as dead buttons. */
  social: {
    linkedin: "",
    instagram: "",
    facebook: "",
    x: "",
  },

  cta: {
    primary: { label: "Request a Quote", href: "/contact" },
    secondary: { label: "Explore Our Solutions", href: "/solutions" },
    whatsapp: { label: "Chat With JP2" },
  },

  /** Prefilled WhatsApp greeting. Edit freely. */
  whatsappMessage:
    "Hello JP2 Solar Energy. I would like to discuss an energy solution for my property.",
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Builds the wa.me link, or null when no number has been configured yet. */
export function whatsappLink(): string | null {
  const number = siteConfig.contact.whatsapp.replace(/\D/g, "");
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
}

/** True once JP2 has supplied enough detail for structured data to be honest. */
export function hasPublishableOrganizationData(): boolean {
  const { phone, email, address } = siteConfig.contact;
  return Boolean(phone || email || address.line1);
}
