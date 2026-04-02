import type { Metadata } from "next";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Truck Service",
  description:
    "Heavy-duty truck repair and service in Sonora, CA. Suspension, brakes, electrical, and full-service lube shop. Call (209) 532-7994.",
};

const services = [
  "Heavy-duty truck repair & maintenance",
  "Suspension repair & upgrades",
  "Brake service & repair",
  "Electrical diagnostics",
  "Full-service lube shop",
  "Custom fabrication",
  "Fleet maintenance",
  "DOT inspections",
];

export default function TruckServicePage() {
  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Truck Service</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Professional heavy-duty truck repair and maintenance from a team
            with roots in the trucking industry since the 1950s.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading title="Truck Services" centered={false} />
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
