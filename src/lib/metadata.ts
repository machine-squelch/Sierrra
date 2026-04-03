import type { Metadata } from "next";
import { site } from "./site";

export const ogImagePath = "/images/og-image.jpg";

export function buildPageMetadata(opts: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const pageUrl = opts.path === "/" ? site.url : `${site.url}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: site.name,
      title: opts.title,
      description: opts.description,
      url: pageUrl,
      images: [
        {
          url: ogImagePath,
          width: 1200,
          height: 630,
          alt: `${site.shortName} — RV and truck service in Sonora, CA`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [ogImagePath],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}
