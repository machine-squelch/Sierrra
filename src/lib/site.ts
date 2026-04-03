const PRODUCTION_SITE_URL = "https://sierraheavyduty.com";

function normalizeSiteUrl(raw: string): string {
  const trimmed = raw.trim().replace(/\/+$/, "");
  if (!trimmed.startsWith("http://") && !trimmed.startsWith("https://")) {
    return `https://${trimmed}`;
  }
  return trimmed;
}

/** Canonical origin for metadata, JSON-LD, sitemap, and llms routes. Set NEXT_PUBLIC_SITE_URL for a temporary or alternate domain (e.g. preview for the owner). */
export function resolveSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv?.trim()) {
    return normalizeSiteUrl(fromEnv);
  }
  return PRODUCTION_SITE_URL;
}

export const site = {
  name: "Sierra Heavy Duty RV & Truck Center",
  shortName: "Sierra Heavy Duty",
  get url() {
    return resolveSiteUrl();
  },
  get domain() {
    try {
      return new URL(this.url).hostname;
    } catch {
      return "sierraheavyduty.com";
    }
  },
  tagline: "We fix it right so you can keep adventuring.",
  phone: {
    primary: "(209) 532-7994",
    primaryRaw: "+12095327994",
    secondary: "(209) 532-8229",
    secondaryRaw: "+12095328229",
  },
  email: "shop@sierraheavyduty.com",
  address: {
    street: "18968 Waylon Way",
    city: "Sonora",
    state: "CA",
    zip: "95370",
    full: "18968 Waylon Way, Sonora, CA 95370",
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.5!2d-120.3821!3d37.9841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus",
    googleMapsLink:
      "https://www.google.com/maps/place/18968+Waylon+Way,+Sonora,+CA+95370",
  },
  hours: [
    { day: "Monday", time: "8:00 AM – 5:30 PM" },
    { day: "Tuesday", time: "8:00 AM – 5:30 PM" },
    { day: "Wednesday", time: "8:00 AM – 5:30 PM" },
    { day: "Thursday", time: "8:00 AM – 5:30 PM" },
    { day: "Friday", time: "8:00 AM – 5:30 PM" },
    { day: "Saturday", time: "8:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: {
    facebook:
      "https://www.facebook.com/people/Sierra-Heavy-Duty-RV-and-Truck-Center/100063723755765/",
  },
  /**
   * Public Google Business Profile URL (e.g. https://g.page/... or Maps “Share” link).
   * Add when available so JSON-LD `sameAs` matches GBP — improves entity consistency for Google.
   */
  googleBusinessProfileUrl: "",
};

/** Profile URLs that represent the same organization (schema.org `sameAs`). */
export function sameAsProfileUrls(): string[] {
  const urls = [
    site.social.facebook,
    site.address.googleMapsLink,
    site.googleBusinessProfileUrl?.trim(),
  ].filter(Boolean) as string[];
  return [...new Set(urls)];
}
