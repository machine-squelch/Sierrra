import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import {
  WrenchScrewdriverIcon,
  TruckIcon,
  HomeModernIcon,
  PaintBrushIcon,
  ShieldCheckIcon,
  SparklesIcon,
  CubeIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    id: "general-maintenance",
    title: "General Maintenance",
    description:
      "Routine checks, tune-ups, and preventive maintenance to keep your RV road-ready year-round.",
    icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
  },
  {
    id: "suspension",
    title: "Suspension Repair",
    description:
      "Smooth rides ahead — leveling kits, shocks, springs, and full suspension overhauls.",
    icon: <TruckIcon className="w-6 h-6" />,
  },
  {
    id: "interior-appliance",
    title: "Interior Appliance Repair",
    description:
      "Fridges, A/C, water heaters, electronics — we diagnose and fix what others can't.",
    icon: <HomeModernIcon className="w-6 h-6" />,
  },
  {
    id: "exterior-cosmetic",
    title: "Exterior & Cosmetic",
    description:
      "Rubber roofs, dent removal, paint touch-ups, awning replacement, and full exterior care.",
    icon: <PaintBrushIcon className="w-6 h-6" />,
  },
  {
    id: "collision",
    title: "Collision Repair",
    description:
      "Body shop pros — insurance claim support, frame straightening, and structural repair.",
    icon: <ShieldCheckIcon className="w-6 h-6" />,
  },
  {
    id: "restorations",
    title: "Full Restorations",
    description:
      "Old RVs reborn — from flooring and cabinetry to solar, electrical, and a fresh exterior.",
    icon: <SparklesIcon className="w-6 h-6" />,
  },
  {
    id: "hitches",
    title: "Hitches & Accessories",
    description:
      "Tow bars, fifth-wheel hitches, weight distribution systems, and a full parts showroom.",
    icon: <CubeIcon className="w-6 h-6" />,
  },
  {
    id: "solar",
    title: "Solar & Batteries",
    description:
      "Off-grid power upgrades — solar panel installs, battery banks, inverters, and monitoring.",
    icon: <BoltIcon className="w-6 h-6" />,
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="How We Keep You on the Road"
          subtitle="From routine maintenance to full restorations, our shop handles every RV and truck job under one roof."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              href={`/rv-service#${service.id}`}
              icon={service.icon}
            />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-600 bg-blue-50 border border-blue-100 rounded-lg py-3 px-4 max-w-xl mx-auto">
          <span className="font-semibold text-[#007bff]">
            Emergency mobile service available
          </span>{" "}
          — call us anytime at{" "}
          <a
            href="tel:+12095327994"
            className="font-semibold text-[#007bff] underline"
          >
            (209) 532-7994
          </a>
        </p>
      </div>
    </section>
  );
}
