import { site, sameAsProfileUrls } from "./site";

export function businessEntityId(): string {
  return `${site.url}/#business`;
}

const websiteEntityId = () => `${site.url}/#website`;

/**
 * WebSite + LocalBusiness as one @graph (recommended pattern for Google).
 * Keep NAP, hours, and aggregateRating aligned with the live Google Business Profile.
 */
export function siteJsonLdGraph() {
  const bizId = businessEntityId();
  const webId = websiteEntityId();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": webId,
        url: site.url,
        name: site.name,
        inLanguage: "en-US",
        publisher: { "@id": bizId },
      },
      {
        "@type": ["AutoRepair", "LocalBusiness"],
        "@id": bizId,
        name: site.name,
        image: [
          `${site.url}/images/og-image.jpg`,
          `${site.url}/images/sierra-heavy-duty-rv-truck-center-sonora-ca-logo.png`,
        ],
        logo: `${site.url}/images/sierra-heavy-duty-rv-truck-center-sonora-ca-logo.png`,
        url: site.url,
        telephone: [site.phone.primary, site.phone.secondary],
        email: site.email,
        sameAs: sameAsProfileUrls(),
        hasMap: site.address.googleMapsLink,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          addressRegion: site.address.state,
          postalCode: site.address.zip,
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 37.9841,
          longitude: -120.3821,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "17:30",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "08:00",
            closes: "14:00",
          },
        ],
        priceRange: "$$",
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 37.9841,
            longitude: -120.3821,
          },
          geoRadius: "50 mi",
        },
        description:
          "Family-owned RV and truck repair center in Sonora, CA. Expert service for RV repairs, hitches, solar, batteries, collision work, and more. Serving the Sierra Nevada foothills since the 1950s.",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.6",
          reviewCount: "93",
        },
      },
    ],
  };
}

export function servicesItemListJsonLd(
  offerings: { title: string; description: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: offerings.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        provider: { "@id": businessEntityId() },
        areaServed: {
          "@type": "AdministrativeArea",
          name: `${site.address.city}, ${site.address.state}`,
        },
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${site.url}${crumb.path === "/" ? "" : crumb.path}`,
    })),
  };
}

export function faqJsonLd(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
