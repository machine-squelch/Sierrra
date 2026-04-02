import type { Metadata } from "next";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "RV Service & Maintenance",
  description:
    "Comprehensive RV service and maintenance in Sonora, CA. Electrical diagnostics, appliance repair, solar installation, and seasonal prep. Call (209) 532-7994.",
};

const services = [
  "General maintenance (gas, diesel, & towable RVs)",
  "Electrical diagnostics & troubleshooting",
  "Appliance repair & replacement",
  "Solar panel installation",
  "Satellite & electronics upgrades",
  "Camera systems installation",
  "A/C service & repair",
  "Tow bar installation & setup",
  "Seasonal winterization & de-winterization",
  "Full-service lube shop",
];

export default function RVServicePage() {
  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            RV Service &amp; Maintenance
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Keep your RV in peak condition with our comprehensive maintenance
            and upgrade services.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading title="Service & Maintenance" centered={false} />
              <ul className="mt-8 space-y-3">
                {services.map((service) => (
                  <li key={service} className="flex items-start gap-3 text-gray-600">
                    <span className="text-secondary font-bold mt-0.5">&#10003;</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center text-gray-400">
              <span className="text-lg">Service Photo</span>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
