import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative bg-primary text-white">
      {/* Background overlay - will hold a background image later */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-primary/70" />

      <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-36">
        <div className="max-w-2xl">
          <p className="text-secondary font-semibold mb-4 text-lg">
            Serving the Sierra Nevada Foothills Since the 1950s
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Expert RV &amp; Truck
            <br />
            <span className="text-secondary">Repair &amp; Service</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Family-owned and operated in Sonora, CA. From routine maintenance to
            full restorations, we keep your RV and heavy-duty truck running
            strong.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Request Service
            </Button>
            <Button href="tel:2095327994" variant="outline" size="lg">
              Call (209) 532-7994
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
