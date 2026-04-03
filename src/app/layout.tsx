import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteJsonLdGraph } from "@/lib/schema";
import { ogImagePath } from "@/lib/metadata";
import { site } from "@/lib/site";

const defaultTitle = "Sierra Heavy Duty | RV Repair Sonora CA";
const defaultDescription =
  "Expert RV repair, maintenance, parts & accessories in Sonora, CA. Family-owned shop serving the Sierra Nevada foothills. Collision repair, solar, hitches, restorations & more. Call (209) 532-7994.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: defaultTitle,
    template: "%s | Sierra Heavy Duty RV & Truck Center",
  },
  description: defaultDescription,
  keywords: [
    "RV repair Sonora CA",
    "RV maintenance Sonora",
    "truck repair Sonora CA",
    "RV collision repair",
    "RV restoration",
    "solar installation RV",
    "RV parts Sonora",
    "Sierra Heavy Duty",
    "RV service near me",
    "heavy duty truck repair",
  ],
  icons: {
    icon: "/images/sierra-heavy-duty-rv-truck-center-sonora-ca-logo-sm.webp",
    apple: "/images/sierra-heavy-duty-rv-truck-center-sonora-ca-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    url: site.url,
    title: defaultTitle,
    description:
      "Expert RV repair, maintenance, parts & accessories in Sonora, CA. Family-owned shop — call (209) 532-7994.",
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
    title: defaultTitle,
    description:
      "Expert RV repair, maintenance, parts & accessories in Sonora, CA. Family-owned shop — call (209) 532-7994.",
    images: [ogImagePath],
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteJsonLdGraph()),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
