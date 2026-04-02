import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "70+ Years of Experience",
    description:
      "Family involvement in heavy truck and RV industries since the 1950s and 1960s.",
  },
  {
    title: "Full-Service Shop",
    description:
      "From electrical diagnostics to collision repair, suspension work to custom fabrication — all under one roof.",
  },
  {
    title: "Mobile Service Available",
    description:
      "Emergency mobile repairs so you're never stranded. We come to you when you can't come to us.",
  },
  {
    title: "Parts & Accessories",
    description:
      "Large inventory showroom with RV and truck parts, accessories, and upgrade equipment.",
  },
  {
    title: "Insurance & Warranty Work",
    description:
      "We work directly with insurance companies and honor extended warranty repairs.",
  },
  {
    title: "4.6-Star Rated",
    description:
      "Consistently praised by customers for our professional, knowledgeable, and friendly service.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Why Choose Sierra Heavy Duty?"
          subtitle="Trusted by the Sonora community for dependable, quality service."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-xl">
                &#10003;
              </div>
              <div>
                <h3 className="font-bold text-dark mb-1">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
