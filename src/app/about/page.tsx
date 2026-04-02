import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sierra Heavy Duty RV & Truck Center — a family-owned business serving Sonora, CA since the 1950s with expert RV and truck repair services.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Family-owned and operated, with roots in the heavy truck and RV
            industry going back over 70 years.
          </p>
        </div>
      </section>

      {/* History / Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                title="Our Story"
                centered={false}
              />
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Sierra Heavy Duty is a family-owned company that has been
                  involved in the heavy truck and tractor industry since the
                  1950s and the RV industry since the early 1960s.
                </p>
                <p>
                  Established in 2006 as Sierra Heavy Duty RV &amp; Truck
                  Center, we brought decades of hands-on experience to Sonora,
                  CA, where we've become the trusted name for RV and truck
                  repair in the Sierra Nevada foothills.
                </p>
                <p>
                  Our team specializes in everything from routine maintenance to
                  complex electrical troubleshooting, collision repair, and full
                  RV restorations. We treat every customer like family.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center text-gray-400">
              {/* Placeholder for shop/team photo */}
              <span className="text-lg">Shop Photo</span>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
