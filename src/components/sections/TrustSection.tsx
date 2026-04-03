"use client";

import {
  AcademicCapIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { motion, useReducedMotion } from "framer-motion";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { GoogleReviewCta } from "@/components/ui/GoogleReviewCta";
import { reviews } from "@/lib/reviews";
import { site } from "@/lib/site";

const trustPoints = [
  {
    icon: <AcademicCapIcon className="w-8 h-8" />,
    title: "Expert Techs",
    description:
      "ASE-level expertise with decades of hands-on RV and heavy-truck repair experience.",
  },
  {
    icon: <MapPinIcon className="w-8 h-8" />,
    title: "Local Sonora Shop",
    description:
      "Family-owned and rooted in the Sierra Nevada foothills since the 1950s. We're your neighbors.",
  },
  {
    icon: <ClockIcon className="w-8 h-8" />,
    title: "Quick Turnaround",
    description:
      "We know you want to get back on the road. Efficient diagnostics and repair scheduling.",
  },
];

export function TrustSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-14 md:mb-16">
          {trustPoints.map((point, i) => (
            <motion.div
              key={point.title}
              className="text-center"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: reduceMotion ? 0 : i * 0.08,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-[#007bff] mb-4"
                whileHover={reduceMotion ? undefined : { scale: 1.06 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
              >
                {point.icon}
              </motion.div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {point.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gray-50 rounded-2xl p-7 sm:p-10 md:p-12 mb-14 md:mb-16"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Family-Owned. Locally Trusted. Built on Experience.
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Sierra Heavy Duty started with a family that&apos;s been in the heavy
              truck and tractor business since the 1950s, and in the RV industry
              since the early 1960s. When we opened our doors in Sonora, we
              brought that same old-school work ethic — fix it right, charge
              fair, and treat every customer the way we&apos;d want to be treated.
              That&apos;s still how we operate today.
            </p>
          </div>
        </motion.div>

        <div>
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3"
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What Our Customers Say
          </motion.h2>
          <p className="text-center text-gray-600 mb-2 max-w-2xl mx-auto text-sm sm:text-base px-1">
            Summary reflects public feedback (e.g. Google). Keep this page and
            structured data in sync with your{" "}
            <a
              href={site.address.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#007bff] font-medium hover:underline"
            >
              Google Business Profile
            </a>{" "}
            for ratings, hours, and NAP.
          </p>
          <p className="text-center text-gray-500 text-sm mb-8 px-2">
            Quotes below are illustrative summaries — see current reviews on Google Maps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={review.author}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  delay: reduceMotion ? 0 : i * 0.07,
                  duration: 0.4,
                }}
              >
                <ReviewCard review={review} />
              </motion.div>
            ))}
          </div>
          <GoogleReviewCta variant="trust" />
        </div>
      </div>
    </section>
  );
}
