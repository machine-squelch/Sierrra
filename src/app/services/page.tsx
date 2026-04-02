import type { Metadata } from "next";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "RV repair, RV maintenance, truck service, parts and accessories at Sierra Heavy Duty in Sonora, CA. Call (209) 532-7994.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Comprehensive RV and truck services from a team with over 70 years
            of industry experience.
          </p>
        </div>
      </section>

      <ServicesOverview />
      <CTABanner />
    </>
  );
}
