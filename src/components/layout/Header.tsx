"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { PhoneIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

const serviceAnchors = [
  { name: "General Maintenance", anchor: "#general-maintenance" },
  { name: "Suspension", anchor: "#suspension" },
  { name: "Interior Appliance Repair", anchor: "#interior-appliance" },
  { name: "Exterior & Cosmetic", anchor: "#exterior-cosmetic" },
  { name: "Collision Repair", anchor: "#collision" },
  { name: "Full Restorations", anchor: "#restorations" },
  { name: "Hitches & Accessories", anchor: "#hitches" },
  { name: "Solar & Batteries", anchor: "#solar" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    return () => {
      if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    };
  }, []);

  function openDropdown() {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  }

  function closeDropdown() {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-banner.png"
              alt="Sierra Heavy Duty RV & Truck Center"
              width={220}
              height={50}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-[#007bff] transition-colors"
            >
              Home
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <Link
                href="/rv-service"
                className="text-sm font-medium text-gray-700 hover:text-[#007bff] transition-colors flex items-center gap-1"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[240px] z-50">
                  {serviceAnchors.map((s) => (
                    <Link
                      key={s.anchor}
                      href={`/rv-service${s.anchor}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#007bff] transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/#about"
              className="text-sm font-medium text-gray-700 hover:text-[#007bff] transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 hover:text-[#007bff] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${site.phone.primaryRaw}`}
              className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-[#007bff] transition-colors"
            >
              <PhoneIcon className="w-4 h-4 text-[#007bff]" />
              {site.phone.primary}
            </a>
            <Button href="/contact" size="sm">
              Request Service
            </Button>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={`tel:${site.phone.primaryRaw}`}
              className="p-2 text-[#007bff]"
              aria-label="Call us"
            >
              <PhoneIcon className="w-6 h-6" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-700"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-100 pb-4">
          <Link
            href="/"
            className="block px-6 py-3 text-gray-700 font-medium hover:bg-gray-50"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/rv-service"
            className="block px-6 py-3 text-gray-700 font-medium hover:bg-gray-50"
            onClick={() => setMobileOpen(false)}
          >
            Services
          </Link>
          {serviceAnchors.map((s) => (
            <Link
              key={s.anchor}
              href={`/rv-service${s.anchor}`}
              className="block px-10 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-[#007bff]"
              onClick={() => setMobileOpen(false)}
            >
              {s.name}
            </Link>
          ))}
          <Link
            href="/#about"
            className="block px-6 py-3 text-gray-700 font-medium hover:bg-gray-50"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block px-6 py-3 text-gray-700 font-medium hover:bg-gray-50"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
          <div className="px-6 pt-3 space-y-2">
            <Button
              href={`tel:${site.phone.primaryRaw}`}
              variant="secondary"
              size="md"
              className="w-full"
            >
              <PhoneIcon className="w-5 h-5" />
              Call {site.phone.primary}
            </Button>
            <Button href="/contact" size="md" className="w-full">
              Request Service
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
