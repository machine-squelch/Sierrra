import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { PhoneIcon } from "@heroicons/react/24/solid";

export function Hero() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-[#007bff]/20" />
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-28">
        <div className="flex flex-col items-center text-center">
          {/* Logo banner */}
          <Image
            src="/images/sierra-heavy-duty-rv-truck-center-sonora-ca-logo.webp"
            alt="Sierra Heavy Duty RV and Truck Center — RV repair, maintenance, parts and accessories in Sonora, CA"
            width={1200}
            height={278}
            className="w-full max-w-2xl h-auto mb-8 drop-shadow-2xl"
            priority
          />

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-4 max-w-3xl">
            RV Repair, Maintenance, Parts &amp; Accessories in{" "}
            <span className="text-[#007bff]">Sonora, CA</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
            Expert service for RV repairs, hitches, solar, batteries, collision
            work, and more from a trusted family-owned Sonora shop.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/contact" size="lg">
              Request Service
            </Button>
            <Button
              href={`tel:${site.phone.primaryRaw}`}
              variant="outline"
              size="lg"
            >
              <PhoneIcon className="w-5 h-5" />
              Call {site.phone.primary}
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Second line:{" "}
            <a
              href={`tel:${site.phone.secondaryRaw}`}
              className="text-gray-300 hover:text-white underline transition-colors"
            >
              {site.phone.secondary}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
