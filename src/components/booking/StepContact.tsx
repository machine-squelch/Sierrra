"use client";

import { useState } from "react";
import { stepContactSchema, type BookingData } from "@/lib/booking";

type Props = {
  data: Partial<BookingData>;
  update: (d: Partial<BookingData>) => void;
  next: () => void;
  back: () => void;
};

const contactPreferences = [
  { value: "phone", label: "Phone call" },
  { value: "email", label: "Email" },
  { value: "text", label: "Text message" },
] as const;

export function StepContact({ data, update, next, back }: Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    update({ [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  }

  function handleNext() {
    const result = stepContactSchema.safeParse({
      name: data.name,
      phone: data.phone,
      email: data.email,
      preferContact: data.preferContact,
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
        How do we reach you?
      </h2>
      <p className="text-gray-600 mb-6">
        We&apos;ll use this to confirm your appointment and send updates.
      </p>

      <div className="space-y-5 max-w-lg">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={data.name ?? ""}
            onChange={handleChange}
            className={`w-full border rounded-lg px-4 py-3 text-gray-900 outline-none transition-colors ${
              errors.name
                ? "border-red-400 focus:ring-2 focus:ring-red-200"
                : "border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-[#007bff]"
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(209) 555-0000"
              value={data.phone ?? ""}
              onChange={handleChange}
              className={`w-full border rounded-lg px-4 py-3 text-gray-900 outline-none transition-colors ${
                errors.phone
                  ? "border-red-400 focus:ring-2 focus:ring-red-200"
                  : "border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-[#007bff]"
              }`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={data.email ?? ""}
              onChange={handleChange}
              className={`w-full border rounded-lg px-4 py-3 text-gray-900 outline-none transition-colors ${
                errors.email
                  ? "border-red-400 focus:ring-2 focus:ring-red-200"
                  : "border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-[#007bff]"
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* Contact preference */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred contact method
          </label>
          <div className="flex gap-3">
            {contactPreferences.map((pref) => {
              const isSelected = data.preferContact === pref.value;
              return (
                <button
                  key={pref.value}
                  type="button"
                  onClick={() => update({ preferContact: pref.value as BookingData["preferContact"] })}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border-2 transition-all cursor-pointer ${
                    isSelected
                      ? "border-[#007bff] bg-blue-50 text-[#007bff]"
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {pref.label}
                </button>
              );
            })}
          </div>
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
          Review Appointment
        </button>
      </div>
    </div>
  );
}
