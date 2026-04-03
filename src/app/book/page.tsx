import type { Metadata } from "next";
import { BookingWizard } from "@/components/booking/BookingWizard";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Schedule Service",
  description:
    "Book an RV or truck service appointment at Sierra Heavy Duty in Sonora, CA. Pick your service, vehicle, and preferred date — we'll confirm within one business day.",
};

export default function BookPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-gray-900 text-white py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
            Schedule Your Service
          </h1>
          <p className="text-gray-300 text-lg max-w-xl">
            Book online in under 2 minutes. We&apos;ll confirm your appointment
            within one business day.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <BookingWizard />
        </div>
      </section>

      {/* Prefer to call */}
      <section className="border-t border-gray-200 py-10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-600">
            Prefer to talk to a person?{" "}
            <a
              href={`tel:${site.phone.primaryRaw}`}
              className="text-[#007bff] font-semibold hover:underline"
            >
              Call {site.phone.primary}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
