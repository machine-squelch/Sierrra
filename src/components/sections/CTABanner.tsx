import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { PhoneIcon } from "@heroicons/react/24/solid";

export function CTABanner() {
  return (
    <section className="bg-[#007bff] text-white py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Ready to Get Your RV or Truck Serviced?
        </h2>
        <p className="text-blue-100 mb-8 text-lg">
          Call today or fill out our service request form. Walk-ins welcome —
          we&apos;re at {site.address.street} in Sonora.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Button href="/book" variant="outline" size="lg">
            Schedule Service
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
      </div>
    </section>
  );
}
