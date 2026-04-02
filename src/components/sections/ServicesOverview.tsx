import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";

const services = [
  {
    title: "RV Repair",
    description:
      "Collision repair, insurance work, structural repairs, and full RV restorations. We handle everything from minor fixes to major rebuilds.",
    href: "/services/rv-repair",
  },
  {
    title: "RV Service & Maintenance",
    description:
      "Routine maintenance, electrical diagnostics, appliance service, roof repair, solar installation, and seasonal prep for your RV.",
    href: "/services/rv-service",
  },
  {
    title: "Truck Service",
    description:
      "Heavy-duty truck repair and maintenance including suspension, brakes, electrical, and full-service lube shop.",
    href: "/services/truck-service",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive RV and truck services backed by decades of experience and a commitment to quality."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
