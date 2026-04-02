import { Button } from "@/components/ui/Button";

export function CTABanner() {
  return (
    <section className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Get Your RV or Truck Serviced?
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Contact us today to schedule your service appointment or get a free
          estimate. Walk-ins welcome.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="primary" size="lg">
            Request Service
          </Button>
          <Button href="tel:2095327994" variant="outline" size="lg">
            Call (209) 532-7994
          </Button>
        </div>
      </div>
    </section>
  );
}
