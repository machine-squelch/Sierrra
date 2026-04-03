import type { Metadata } from "next";
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
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/sections/CTABanner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "RV & Truck Services",
  description:
    "Complete RV and truck service in Sonora, CA — general maintenance, suspension, collision repair, full restorations, solar installs, hitches, and more. Call (209) 532-7994.",
};

const services = [
  {
    id: "general-maintenance",
    title: "General Maintenance",
    icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
    description:
      "Preventive maintenance keeps breakdowns from happening. We handle oil changes, brake inspections, fluid top-offs, belt replacements, generator servicing, and full system checks for gas, diesel, and towable RVs.",
    items: [
      "Oil & filter changes",
      "Brake inspection & service",
      "Generator maintenance",
      "Fluid checks & top-offs",
      "Battery testing",
      "Tire inspection & rotation",
      "Seasonal winterization & de-winterization",
    ],
  },
  {
    id: "suspension",
    title: "Suspension Repair",
    icon: <TruckIcon className="w-8 h-8" />,
    description:
      "A worn suspension makes every mile miserable and unsafe. We repair and upgrade shocks, leaf springs, air bags, leveling systems, and sway control — for both RVs and heavy-duty trucks.",
    items: [
      "Shock absorber replacement",
      "Leaf spring repair & replacement",
      "Air bag suspension systems",
      "Leveling & stabilizer kits",
      "Sway control installation",
      "Alignment checks",
    ],
  },
  {
    id: "interior-appliance",
    title: "Interior Appliance Repair",
    icon: <HomeModernIcon className="w-8 h-8" />,
    description:
      "When your fridge dies, your A/C quits, or your water heater won't fire, you need a tech who understands RV-specific systems. We diagnose and repair all major interior appliances and electronics.",
    items: [
      "Refrigerator repair (absorption & residential)",
      "Air conditioning service & replacement",
      "Water heater diagnosis & repair",
      "Furnace troubleshooting",
      "Microwave & oven repair",
      "12V & 120V electrical diagnostics",
      "Slide-out mechanism repair",
    ],
  },
  {
    id: "exterior-cosmetic",
    title: "Exterior & Cosmetic",
    icon: <PaintBrushIcon className="w-8 h-8" />,
    description:
      "Protect your investment with expert exterior work. From rubber roof replacement to dent removal, paint touch-ups, awning replacement, and full wash-and-seal — we keep your RV looking its best.",
    items: [
      "Rubber roof repair & replacement",
      "Fiberglass & sidewall repair",
      "Awning replacement",
      "Decal & graphics removal",
      "Dent removal & paint touch-up",
      "Seal & caulk maintenance",
      "Full exterior detailing",
    ],
  },
  {
    id: "collision",
    title: "Collision Repair",
    icon: <ShieldCheckIcon className="w-8 h-8" />,
    description:
      "Accidents happen. We handle collision damage from start to finish — working directly with your insurance company on claims, performing structural repair, body work, paint matching, and getting you back on the road.",
    items: [
      "Insurance claim coordination",
      "Frame & structural repair",
      "Body panel replacement",
      "Paint matching & refinishing",
      "Glass replacement",
      "Storm & tree damage repair",
      "Extended warranty repairs",
    ],
  },
  {
    id: "restorations",
    title: "Full Restorations",
    icon: <SparklesIcon className="w-8 h-8" />,
    description:
      "Got an older RV with good bones? We bring it back to life — new flooring, cabinetry, countertops, appliances, electrical, plumbing, solar, and a fresh exterior. It's a full rebuild at a fraction of new-RV cost.",
    items: [
      "Complete interior remodel",
      "Flooring & cabinetry",
      "Countertop & fixture replacement",
      "Full electrical rewiring",
      "Plumbing overhaul",
      "New appliance installation",
      "Exterior refinishing",
    ],
  },
  {
    id: "hitches",
    title: "Hitches & Accessories",
    icon: <CubeIcon className="w-8 h-8" />,
    description:
      "We sell and install tow bars, fifth-wheel hitches, weight distribution systems, brake controllers, and more. Our parts showroom carries a wide selection of RV and truck accessories.",
    items: [
      "Fifth-wheel hitch install",
      "Weight distribution hitches",
      "Tow bar setup",
      "Brake controller installation",
      "Backup camera systems",
      "Satellite & antenna systems",
      "Full parts showroom",
    ],
  },
  {
    id: "solar",
    title: "Solar & Batteries",
    icon: <BoltIcon className="w-8 h-8" />,
    description:
      "Go off-grid with confidence. We design and install solar panel systems, lithium battery banks, inverters, charge controllers, and monitoring setups tailored to your RV's power needs.",
    items: [
      "Solar panel installation",
      "Lithium battery upgrades",
      "Inverter installation",
      "Charge controller setup",
      "Battery monitoring systems",
      "Shore power & transfer switch repair",
      "Custom power system design",
    ],
  },
];

export default function RVServicePage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-gray-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            RV &amp; Truck Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Everything your RV or truck needs — under one roof in Sonora, CA.
            From routine oil changes to complete restorations, our experienced
            techs handle it all.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button href="/book">Schedule Service</Button>
            <Button href={`tel:${site.phone.primaryRaw}`} variant="outline">
              Call {site.phone.primary}
            </Button>
          </div>
        </div>
      </section>

      {/* Service detail sections */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-16 md:py-20 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 text-[#007bff] mb-4">
                  {service.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Button href="/contact" size="sm">
                  Request This Service
                </Button>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  What&apos;s included
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <svg
                        className="w-5 h-5 text-[#007bff] flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTABanner />
    </>
  );
}
