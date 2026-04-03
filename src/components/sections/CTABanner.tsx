"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { PhoneIcon } from "@heroicons/react/24/solid";

export function CTABanner() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[#007bff] text-white py-12 md:py-16 overflow-hidden">
      <motion.div
        className="max-w-4xl mx-auto px-4 text-center"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
          Ready to Get Your RV or Truck Serviced?
        </h2>
        <p className="text-blue-100 mb-8 text-base sm:text-lg max-w-2xl mx-auto">
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
      </motion.div>
    </section>
  );
}
