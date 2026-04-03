"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const MotionLink = motion.create(Link);

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  name?: string;
  value?: string | readonly string[] | number;
  form?: string;
  title?: string;
  "aria-label"?: string;
};

const variants = {
  primary:
    "bg-[#007bff] text-white hover:bg-[#0069d9] active:bg-[#0062cc] shadow-sm",
  secondary:
    "bg-white text-[#007bff] border-2 border-[#007bff] hover:bg-[#007bff] hover:text-white",
  outline:
    "bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900",
  ghost: "bg-transparent text-[#007bff] hover:bg-blue-50",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  external,
  type = "button",
  disabled,
  onClick,
  name,
  value,
  form,
  title,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const reduceMotion = useReducedMotion();
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;
  const tap = reduceMotion ? undefined : { scale: 0.98 };

  if (href) {
    if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <motion.a
          href={href}
          className={classes}
          whileTap={tap}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <MotionLink
        href={href}
        className={classes}
        whileTap={tap}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      name={name}
      value={value}
      form={form}
      title={title}
      aria-label={ariaLabel}
      className={classes}
      whileTap={tap}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      {children}
    </motion.button>
  );
}
