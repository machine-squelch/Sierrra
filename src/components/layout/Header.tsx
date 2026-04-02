"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "RV Repair", href: "/services/rv-repair" },
      { name: "RV Service & Maintenance", href: "/services/rv-service" },
      { name: "Truck Service", href: "/services/truck-service" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      {/* Top bar */}
      <div className="bg-dark text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="hidden sm:inline">
            18968 Waylon Way, Sonora, CA 95370
          </span>
          <div className="flex items-center gap-4">
            <a href="tel:2095327994" className="hover:text-secondary transition">
              (209) 532-7994
            </a>
            <span className="hidden sm:inline text-gray-400">|</span>
            <span className="hidden sm:inline text-gray-300">
              Mon-Fri 8am-5:30pm · Sat 8am-2pm
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-secondary">Sierra</span> Heavy Duty
          <span className="block text-xs font-normal text-gray-300 tracking-wider">
            RV &amp; Truck Center
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) =>
            item.children ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="hover:text-secondary transition font-medium">
                  {item.name}
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white text-gray-900 rounded-lg shadow-xl py-2 min-w-[220px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 hover:bg-gray-100 transition"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-secondary transition font-medium"
              >
                {item.name}
              </Link>
            )
          )}
          <a
            href="tel:2095327994"
            className="bg-secondary text-dark px-5 py-2 rounded-lg font-semibold hover:bg-secondary-light transition"
          >
            Call Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary-light border-t border-white/10 pb-4">
          {navigation.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className="block px-6 py-3 hover:bg-white/10 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.name}
                  href={child.href}
                  className="block px-10 py-2 text-sm text-gray-300 hover:bg-white/10 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {child.name}
                </Link>
              ))}
            </div>
          ))}
          <div className="px-6 pt-3">
            <a
              href="tel:2095327994"
              className="block text-center bg-secondary text-dark px-5 py-3 rounded-lg font-semibold"
            >
              Call (209) 532-7994
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
