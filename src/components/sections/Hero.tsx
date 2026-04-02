import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { PhoneIcon } from "@heroicons/react/24/solid";

export function Hero() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background gradient — swap for a real hero image via CSS background-image */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-[#007bff]/30" />
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            RV Repair, Maintenance, Parts &amp; Accessories in{" "}
            <span className="text-[#007bff]">Sonora, CA</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
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
