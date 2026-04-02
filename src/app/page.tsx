import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TrustSection } from "@/components/sections/TrustSection";
import { FAQ, faqs } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";
import { faqJsonLd } from "@/lib/schema";

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
