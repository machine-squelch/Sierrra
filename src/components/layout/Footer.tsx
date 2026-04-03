import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-white text-lg font-bold mb-3">
              Sierra <span className="text-[#007bff]">Heavy Duty</span>
            </h3>
            <p className="text-sm leading-relaxed">
              Family-owned RV &amp; truck repair center in Sonora, CA. Trusted
              by the Sierra Nevada foothills community for over 70 years of
              combined industry experience.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "General Maintenance", anchor: "general-maintenance" },
                { name: "Suspension Repair", anchor: "suspension" },
                { name: "Interior Appliance Repair", anchor: "interior-appliance" },
                { name: "Collision Repair", anchor: "collision" },
                { name: "Full Restorations", anchor: "restorations" },
                { name: "Solar & Batteries", anchor: "solar" },
              ].map((s) => (
                <li key={s.anchor}>
                  <Link
                    href={`/rv-service#${s.anchor}`}
                    className="hover:text-white transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <address className="not-italic text-sm space-y-2">
              <p>
                <a
                  href={site.address.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${site.phone.primaryRaw}`}
                  className="text-[#007bff] hover:text-blue-400 transition-colors font-medium"
                >
                  {site.phone.primary}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${site.phone.secondaryRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {site.phone.secondary}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-white transition-colors"
                >
                  {site.email}
                </a>
              </p>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Hours
            </h4>
            <dl className="text-sm space-y-1">
              {site.hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-4">
                  <dt className="font-medium text-gray-300">{h.day}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
            {site.social.facebook && (
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
