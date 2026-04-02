import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sierra Heavy Duty RV & Truck Center in Sonora, CA. Call (209) 532-7994 or visit us at 18968 Waylon Way. Request a service appointment today.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Get in touch to schedule a service appointment, request an estimate,
            or ask a question. We&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <SectionHeading
                title="Request Service"
                subtitle="Fill out the form below and we'll get back to you within one business day."
                centered={false}
              />
              <form className="mt-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                      placeholder="(209) 555-0000"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="rv-repair">RV Repair</option>
                    <option value="rv-service">RV Service &amp; Maintenance</option>
                    <option value="truck-service">Truck Service</option>
                    <option value="parts">Parts &amp; Accessories</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none resize-y"
                    placeholder="Describe your vehicle and the service you need..."
                  />
                </div>
                <Button type="submit" variant="primary" size="lg">
                  Send Request
                </Button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-dark mb-4">
                  Visit Our Shop
                </h3>
                <address className="not-italic text-gray-600 space-y-2">
                  <p className="font-medium text-dark">
                    Sierra Heavy Duty RV &amp; Truck Center
                  </p>
                  <p>18968 Waylon Way</p>
                  <p>Sonora, CA 95370</p>
                </address>
              </div>

              <div>
                <h3 className="text-xl font-bold text-dark mb-4">
                  Call Us
                </h3>
                <p>
                  <a href="tel:2095327994" className="text-primary font-semibold text-lg hover:text-primary-light transition">
                    (209) 532-7994
                  </a>
                </p>
                <p>
                  <a href="tel:2095328229" className="text-primary font-semibold text-lg hover:text-primary-light transition">
                    (209) 532-8229
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-dark mb-4">
                  Business Hours
                </h3>
                <table className="text-gray-600 text-sm">
                  <tbody>
                    <tr><td className="pr-8 py-1 font-medium">Monday - Friday</td><td>8:00 AM - 5:30 PM</td></tr>
                    <tr><td className="pr-8 py-1 font-medium">Saturday</td><td>8:00 AM - 2:00 PM</td></tr>
                    <tr><td className="pr-8 py-1 font-medium">Sunday</td><td>Closed</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center text-gray-400">
                <span className="text-lg">Google Maps Embed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
