"use client";

import { useState } from "react";
import {
  bookingServices,
  stepServiceSchema,
  type BookingData,
} from "@/lib/booking";
import {
  WrenchScrewdriverIcon,
  TruckIcon,
  HomeModernIcon,
  PaintBrushIcon,
  ShieldCheckIcon,
  SparklesIcon,
  CubeIcon,
  BoltIcon,
  ClipboardDocumentCheckIcon,
  PhoneArrowUpRightIcon,
} from "@heroicons/react/24/outline";

const iconMap: Record<string, React.ReactNode> = {
  wrench: <WrenchScrewdriverIcon className="w-6 h-6" />,
  truck: <TruckIcon className="w-6 h-6" />,
  home: <HomeModernIcon className="w-6 h-6" />,
  paint: <PaintBrushIcon className="w-6 h-6" />,
  shield: <ShieldCheckIcon className="w-6 h-6" />,
  sparkles: <SparklesIcon className="w-6 h-6" />,
  cube: <CubeIcon className="w-6 h-6" />,
  bolt: <BoltIcon className="w-6 h-6" />,
  clipboard: <ClipboardDocumentCheckIcon className="w-6 h-6" />,
  phone: <PhoneArrowUpRightIcon className="w-6 h-6" />,
};

type Props = {
  data: Partial<BookingData>;
  update: (d: Partial<BookingData>) => void;
  next: () => void;
};

export function StepService({ data, update, next }: Props) {
  const [error, setError] = useState("");
  const selected = data.services ?? [];

  function toggle(value: string) {
    const updated = selected.includes(value)
      ? selected.filter((s) => s !== value)
      : [...selected, value];
    update({ services: updated });
    if (error) setError("");
  }

  function handleNext() {
    const result = stepServiceSchema.safeParse({ services: selected });
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }
    next();
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        What do you need done?
      </h2>
      <p className="text-gray-600 mb-6">
        Select one or more services. Not sure? Pick the closest match — we&apos;ll
        sort it out.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {bookingServices.map((service) => {
          const isSelected = selected.includes(service.value);
          return (
            <button
              key={service.value}
              type="button"
              onClick={() => toggle(service.value)}
              className={`flex items-start gap-4 p-4 rounded-xl border-2 text-left transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "border-[#007bff] bg-blue-50 shadow-md shadow-blue-100"
                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                  isSelected
                    ? "bg-[#007bff] text-white"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {iconMap[service.icon]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-gray-900">
                    {service.label}
                  </span>
                  {isSelected && (
                    <svg
                      className="w-5 h-5 text-[#007bff] flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <span className="text-xs text-gray-500">
                  Est. {service.estimate}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-4">{error}</p>
      )}

      <div className="flex justify-end mt-8">
        <button
          onClick={handleNext}
          className="bg-[#007bff] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0069d9] transition-colors cursor-pointer"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
