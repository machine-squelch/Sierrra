"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const MotionLink = motion.create(Link);

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  id?: string;
};

export function ServiceCard({
  title,
  description,
  href,
  icon,
  id,
}: ServiceCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <MotionLink
      href={href}
      id={id}
      className="group block bg-white rounded-xl border border-gray-200 p-5 sm:p-6 hover:border-[#007bff] hover:shadow-lg transition-shadow duration-200"
      whileHover={
        reduceMotion
          ? undefined
          : { y: -5, boxShadow: "0 20px 40px -20px rgba(0,123,255,0.35)" }
      }
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#007bff] flex items-center justify-center mb-4 group-hover:bg-[#007bff] group-hover:text-white transition-colors duration-200">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      <span className="inline-block mt-3 text-[#007bff] text-sm font-semibold group-hover:translate-x-1 transition-transform duration-200">
        Learn more →
      </span>
    </MotionLink>
  );
}
