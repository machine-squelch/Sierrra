import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { site } from "@/lib/site";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Sierra Heavy Duty RV & Truck Center in Sonora, CA. Request service, get an estimate, or ask a question. Call (209) 532-7994 or fill out our form.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-gray-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Contact Us
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Request a service appointment, get an estimate, or just ask a
            question. We&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form — takes 3 columns */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Request Service
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form and we&apos;ll get back to you within one
                business day. For urgent needs, call us directly.
              </p>
              <ContactForm />
            </div>

            {/* Sidebar — takes 2 columns */}
            <aside className="lg:col-span-2 space-y-8">
              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#007bff]">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                  <p>
                    <a
                      href={`tel:${site.phone.primaryRaw}`}
                      className="text-[#007bff] font-semibold text-lg hover:underline"
                    >
                      {site.phone.primary}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`tel:${site.phone.secondaryRaw}`}
                      className="text-gray-600 hover:text-[#007bff] transition-colors"
                    >
                      {site.phone.secondary}
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#007bff]">
                  <EnvelopeIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-[#007bff] hover:underline"
                  >
                    {site.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#007bff]">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                  <a
                    href={site.address.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#007bff] transition-colors"
                  >
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#007bff]">
                  <ClockIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                  <dl className="text-sm text-gray-600 space-y-1">
                    {site.hours.map((h) => (
                      <div key={h.day} className="flex gap-4">
                        <dt className="w-24 font-medium text-gray-700">
                          {h.day}
                        </dt>
                        <dd>{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-gray-200">
                <iframe
                  title="Sierra Heavy Duty RV & Truck Center location"
                  src={site.address.googleMapsEmbed}
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
