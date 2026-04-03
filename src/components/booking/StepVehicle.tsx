"use client";

import { useState } from "react";
import {
  vehicleTypes,
  stepVehicleSchema,
  type BookingData,
} from "@/lib/booking";

type Props = {
  data: Partial<BookingData>;
  update: (d: Partial<BookingData>) => void;
  next: () => void;
  back: () => void;
};

export function StepVehicle({ data, update, next, back }: Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    update({ [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  }

  function handleNext() {
    const result = stepVehicleSchema.safeParse({
      vehicleType: data.vehicleType,
      year: data.year,
      make: data.make,
      model: data.model,
      notes: data.notes,
    });
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0]);
        if (!errs[key]) errs[key] = issue.message;
      }
      setErrors(errs);
      return;
    }
    next();
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Tell us about your vehicle
      </h2>
      <p className="text-gray-600 mb-6">
        This helps us prepare the right parts and schedule the right tech.
      </p>

      <div className="space-y-5 max-w-lg">
        {/* Vehicle type */}
        <div>
          <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700 mb-1">
            Vehicle Type <span className="text-red-500">*</span>
          </label>
          <select
            id="vehicleType"
            name="vehicleType"
            value={data.vehicleType ?? ""}
            onChange={handleChange}
            className={`w-full border rounded-lg px-4 py-3 text-gray-900 outline-none transition-colors ${
              errors.vehicleType
                ? "border-red-400 focus:ring-2 focus:ring-red-200"
                : "border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-[#007bff]"
            }`}
          >
            <option value="">Select type...</option>
            {vehicleTypes.map((vt) => (
              <option key={vt.value} value={vt.value}>
                {vt.label}
              </option>
            ))}
          </select>
          {errors.vehicleType && (
            <p className="text-red-500 text-sm mt-1">{errors.vehicleType}</p>
          )}
        </div>

        {/* Year / Make / Model row */}
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
              Year <span className="text-red-500">*</span>
            </label>
            <input
              id="year"
              name="year"
              type="text"
              inputMode="numeric"
              maxLength={4}
              placeholder="2019"
              value={data.year ?? ""}
              onChange={handleChange}
              className={`w-full border rounded-lg px-4 py-3 text-gray-900 outline-none transition-colors ${
                errors.year
                  ? "border-red-400 focus:ring-2 focus:ring-red-200"
                  : "border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-[#007bff]"
              }`}
            />
            {errors.year && (
              <p className="text-red-500 text-sm mt-1">{errors.year}</p>
            )}
          </div>
          <div>
            <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-1">
              Make <span className="text-red-500">*</span>
            </label>
            <input
              id="make"
              name="make"
              type="text"
              placeholder="Winnebago"
              value={data.make ?? ""}
              onChange={handleChange}
              className={`w-full border rounded-lg px-4 py-3 text-gray-900 outline-none transition-colors ${
                errors.make
                  ? "border-red-400 focus:ring-2 focus:ring-red-200"
                  : "border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-[#007bff]"
              }`}
            />
            {errors.make && (
              <p className="text-red-500 text-sm mt-1">{errors.make}</p>
            )}
          </div>
          <div>
            <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
              Model <span className="text-red-500">*</span>
            </label>
            <input
              id="model"
              name="model"
              type="text"
              placeholder="Vista"
              value={data.model ?? ""}
              onChange={handleChange}
              className={`w-full border rounded-lg px-4 py-3 text-gray-900 outline-none transition-colors ${
                errors.model
                  ? "border-red-400 focus:ring-2 focus:ring-red-200"
                  : "border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-[#007bff]"
              }`}
            />
            {errors.model && (
              <p className="text-red-500 text-sm mt-1">{errors.model}</p>
            )}
          </div>
        </div>

        {/* Notes */}
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
            Anything else we should know?{" "}
            <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            placeholder="Describe symptoms, urgency, or anything that helps us prepare..."
            value={data.notes ?? ""}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 outline-none resize-y focus:ring-2 focus:ring-blue-200 focus:border-[#007bff] transition-colors"
          />
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={back}
          className="text-gray-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors cursor-pointer"
        >
          &larr; Back
        </button>
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
