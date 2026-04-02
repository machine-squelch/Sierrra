import Link from "next/link";

const services = [
  { name: "RV Repair", href: "/services/rv-repair" },
  { name: "RV Service & Maintenance", href: "/services/rv-service" },
  { name: "Truck Service", href: "/services/truck-service" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              <span className="text-secondary">Sierra</span> Heavy Duty
            </h3>
            <p className="text-sm leading-relaxed">
              Family-owned RV &amp; truck repair center serving the Sierra
              Nevada foothills since the 1950s. Your trusted partner for all RV
              and heavy-duty truck needs.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="hover:text-secondary transition"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-secondary transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-sm space-y-2">
              <p>18968 Waylon Way</p>
              <p>Sonora, CA 95370</p>
              <p className="pt-2">
                <a
                  href="tel:2095327994"
                  className="text-secondary hover:text-secondary-light transition"
                >
                  (209) 532-7994
                </a>
              </p>
              <p>
                <a
                  href="tel:2095328229"
                  className="text-secondary hover:text-secondary-light transition"
                >
                  (209) 532-8229
                </a>
              </p>
              <div className="pt-2 text-xs">
                <p>Mon-Fri: 8:00am - 5:30pm</p>
                <p>Sat: 8:00am - 2:00pm</p>
                <p>Sun: Closed</p>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Sierra Heavy Duty RV &amp; Truck
            Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
