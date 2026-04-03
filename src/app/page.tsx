import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TrustSection } from "@/components/sections/TrustSection";
import { FAQ, faqs } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";
import { faqJsonLd } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Sierra Heavy Duty | RV Repair Sonora CA",
  description:
    "Expert RV repair, maintenance, parts & accessories in Sonora, CA. Family-owned shop serving the Sierra Nevada foothills. Collision repair, solar, hitches, restorations & more. Call (209) 532-7994.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(faqs)),
        }}
      />
      <Hero />
      <ServicesGrid />
      <TrustSection />
      <FAQ />
      <CTABanner />
    </>
  );
}
