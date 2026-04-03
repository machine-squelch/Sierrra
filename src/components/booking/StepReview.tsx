"use client";

import { bookingServices, vehicleTypes, type BookingData } from "@/lib/booking";

type Props = {
  data: Partial<BookingData>;
  back: () => void;
  goTo: (step: number) => void;
  onSubmit: () => void;
};

export function StepReview({ data, back, goTo, onSubmit }: Props) {
  const selectedServices = bookingServices.filter((s) =>
    data.services?.includes(s.value)
  );
  const vehicleLabel =
    vehicleTypes.find((v) => v.value === data.vehicleType)?.label ?? data.vehicleType;

  const dateFormatted = data.date
    ? new Date(data.date + "T12:00:00").toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

  const timeFormatted = data.time
    ? new Date(`2000-01-01T${data.time}`).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      })
    : "";

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Review your appointment
      </h2>
      <p className="text-gray-600 mb-6">
        Make sure everything looks right before submitting.
      </p>

      <div className="space-y-6 max-w-lg">
        {/* Services */}
        <ReviewSection title="Services" step={1} goTo={goTo}>
          <div className="flex flex-wrap gap-2">
            {selectedServices.map((s) => (
              <span
                key={s.value}
                className="bg-blue-50 text-[#007bff] px-3 py-1 rounded-full text-sm font-medium"
              >
                {s.label}
              </span>
            ))}
          </div>
        </ReviewSection>

        {/* Vehicle */}
        <ReviewSection title="Vehicle" step={2} goTo={goTo}>
          <p className="text-gray-900 font-medium">
            {data.year} {data.make} {data.model}
          </p>
          <p className="text-gray-500 text-sm">{vehicleLabel}</p>
          {data.notes && (
            <p className="text-gray-500 text-sm mt-1 italic">
              &ldquo;{data.notes}&rdquo;
            </p>
          )}
        </ReviewSection>

        {/* Date & Time */}
        <ReviewSection title="Preferred Date & Time" step={3} goTo={goTo}>
          <p className="text-gray-900 font-medium">{dateFormatted}</p>
          <p className="text-gray-500 text-sm">Drop-off at {timeFormatted}</p>
        </ReviewSection>

        {/* Contact */}
        <ReviewSection title="Contact Info" step={4} goTo={goTo}>
          <p className="text-gray-900 font-medium">{data.name}</p>
          <p className="text-gray-500 text-sm">{data.phone}</p>
          <p className="text-gray-500 text-sm">{data.email}</p>
          <p className="text-gray-500 text-sm capitalize">
            Prefers: {data.preferContact}
          </p>
        </ReviewSection>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6 max-w-lg">
        <p className="text-amber-800 text-sm">
          <span className="font-semibold">Note:</span> This is a preferred time
          request. We&apos;ll confirm your appointment within one business day.
          For urgent needs, call{" "}
          <a href="tel:+12095327994" className="font-semibold underline">
            (209) 532-7994
          </a>
          .
        </p>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={back}
          className="text-gray-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors cursor-pointer"
        >
          &larr; Back
        </button>
        <button
          onClick={onSubmit}
          className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-200 cursor-pointer"
        >
          Confirm Appointment Request
        </button>
      </div>
    </div>
  );
}

function ReviewSection({
  title,
  step,
  goTo,
  children,
}: {
  title: string;
  step: number;
  goTo: (step: number) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
          {title}
        </h3>
        <button
          onClick={() => goTo(step)}
          className="text-[#007bff] text-sm font-medium hover:underline cursor-pointer"
        >
          Edit
        </button>
      </div>
      {children}
    </div>
  );
}
