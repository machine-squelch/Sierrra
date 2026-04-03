import Link from "next/link";
import { bookingServices, type BookingData } from "@/lib/booking";

type Props = {
  data: BookingData;
};

export function StepConfirmation({ data }: Props) {
  const selectedServices = bookingServices.filter((s) =>
    data.services.includes(s.value)
  );

  const dateFormatted = new Date(data.date + "T12:00:00").toLocaleDateString(
    "en-US",
    { weekday: "long", month: "long", day: "numeric", year: "numeric" }
  );

  const timeFormatted = new Date(
    `2000-01-01T${data.time}`
  ).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

  return (
    <div className="text-center max-w-lg mx-auto">
      {/* Animated checkmark */}
      <div className="relative w-20 h-20 mx-auto mb-6">
        <div className="absolute inset-0 rounded-full bg-green-100 animate-ping opacity-25" />
        <div className="relative w-20 h-20 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-200">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Appointment Request Sent!
      </h2>
      <p className="text-gray-600 mb-8">
        Thanks, {data.name.split(" ")[0]}! We&apos;ll confirm your appointment
        within one business day via{" "}
        <span className="font-medium">{data.preferContact}</span>.
      </p>

      {/* Summary card */}
      <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 text-left mb-8">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Appointment Summary
        </h3>
        <dl className="space-y-3 text-sm">
          <div className="flex justify-between">
            <dt className="text-gray-500">Services</dt>
            <dd className="text-gray-900 font-medium text-right">
              {selectedServices.map((s) => s.label).join(", ")}
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-500">Vehicle</dt>
            <dd className="text-gray-900 font-medium">
              {data.year} {data.make} {data.model}
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-500">Preferred Date</dt>
            <dd className="text-gray-900 font-medium">{dateFormatted}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-500">Drop-off Time</dt>
            <dd className="text-gray-900 font-medium">{timeFormatted}</dd>
          </div>
        </dl>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8">
        <p className="text-sm text-gray-700">
          Need to make changes or have an urgent issue? Call us at{" "}
          <a
            href="tel:+12095327994"
            className="text-[#007bff] font-semibold"
          >
            (209) 532-7994
          </a>
        </p>
      </div>

      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[#007bff] font-semibold hover:underline"
      >
        &larr; Back to homepage
      </Link>
    </div>
  );
}
