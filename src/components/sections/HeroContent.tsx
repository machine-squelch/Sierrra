"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { PhoneIcon } from "@heroicons/react/24/solid";

export function HeroContent() {
  const reduceMotion = useReducedMotion();

  const stagger = reduceMotion ? 0 : 0.09;
  const fade = reduceMotion
    ? { duration: 0.01 }
    : { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-28">
      <motion.div
        className="flex flex-col items-center text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: stagger, delayChildren: 0.05 },
          },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
            visible: { opacity: 1, y: 0, transition: fade },
          }}
        >
          <Image
            src="/images/sierra-heavy-duty-rv-truck-center-sonora-ca-logo.webp"
            alt="Sierra Heavy Duty RV and Truck Center — RV repair, maintenance, parts and accessories in Sonora, CA"
            width={1200}
            height={278}
            className="w-full max-w-2xl h-auto mb-8 drop-shadow-2xl"
            priority
          />
        </motion.div>

        <motion.h1
          variants={{
            hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
            visible: { opacity: 1, y: 0, transition: fade },
          }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-4 max-w-3xl text-white"
        >
          RV Repair, Maintenance, Parts &amp; Accessories in{" "}
          <span className="text-[#007bff]">Sonora, CA</span>
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
            visible: { opacity: 1, y: 0, transition: fade },
          }}
          className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl px-1"
        >
          Expert service for RV repairs, hitches, solar, batteries, collision
          work, and more from a trusted family-owned Sonora shop.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
            visible: { opacity: 1, y: 0, transition: fade },
          }}
          className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-2 sm:px-0"
        >
          <Button href="/book" size="lg">
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
        </motion.div>

        <motion.p
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.2, duration: 0.35 } },
          }}
          className="mt-4 text-sm text-gray-400"
        >
          Second line:{" "}
          <a
            href={`tel:${site.phone.secondaryRaw}`}
            className="text-gray-300 hover:text-white underline transition-colors"
          >
            {site.phone.secondary}
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
}
