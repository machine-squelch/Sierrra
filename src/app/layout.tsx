import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { localBusinessJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://sierraheavyduty.com"),
  title: {
    default: "Sierra Heavy Duty | RV Repair Sonora CA",
    template: "%s | Sierra Heavy Duty RV & Truck Center",
  },
  description:
    "Expert RV repair, maintenance, parts & accessories in Sonora, CA. Family-owned shop serving the Sierra Nevada foothills. Collision repair, solar, hitches, restorations & more. Call (209) 532-7994.",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Sierra Heavy Duty RV & Truck Center",
    title: "Sierra Heavy Duty | RV Repair Sonora CA",
    description:
      "Expert RV repair, maintenance, parts & accessories in Sonora, CA. Family-owned shop — call (209) 532-7994.",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://sierraheavyduty.com",
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
            __html: JSON.stringify(localBusinessJsonLd()),
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
