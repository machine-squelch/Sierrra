import { site } from "./site";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: site.name,
    image: `${site.url}/images/og-image.jpg`,
    url: site.url,
    telephone: site.phone.primary,
    email: site.email,
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
      geoRadius: "50",
    },
    description:
      "Family-owned RV and truck repair center in Sonora, CA. Expert service for RV repairs, hitches, solar, batteries, collision work, and more. Serving the Sierra Nevada foothills since the 1950s.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      reviewCount: "93",
    },
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
