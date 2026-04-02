"use client";

import { useState } from "react";
import { contactFormSchema, type ContactFormData, serviceTypes } from "@/lib/validation";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: typeof errors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    // Simulate form submission — replace with real API endpoint
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Service Request Received
        </h3>
        <p className="text-gray-600 mb-4">
          Thanks! We&apos;ll get back to you within one business day. For
          faster response, call us at{" "}
          <a href="tel:+12095327994" className="text-[#007bff] font-semibold">
            (209) 532-7994
          </a>
          .
        </p>
        <Button
          variant="ghost"
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", phone: "", email: "", serviceType: "", message: "" });
          }}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          label="Full Name"
          name="name"
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <Field
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="(209) 555-0000"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          required
        />
      </div>
      <Field
        label="Email Address"
        name="email"
        type="email"
        placeholder="you@example.com"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
      />
      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
          Service Needed <span className="text-red-500">*</span>
        </label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className={`w-full border rounded-lg px-4 py-3 text-gray-900 outline-none transition-colors ${
            errors.serviceType
              ? "border-red-400 focus:ring-2 focus:ring-red-200"
              : "border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-[#007bff]"
          }`}
        >
          <option value="">Select a service...</option>
          {serviceTypes.map((st) => (
            <option key={st.value} value={st.value}>
              {st.label}
            </option>
          ))}
        </select>
        {errors.serviceType && (
          <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Tell Us What You Need <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Describe your vehicle and the service you need..."
          value={formData.message}
          onChange={handleChange}
          className={`w-full border rounded-lg px-4 py-3 text-gray-900 outline-none resize-y transition-colors ${
            errors.message
              ? "border-red-400 focus:ring-2 focus:ring-red-200"
              : "border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-[#007bff]"
          }`}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={submitting}>
        {submitting ? "Sending..." : "Send Service Request"}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full border rounded-lg px-4 py-3 text-gray-900 outline-none transition-colors ${
          error
            ? "border-red-400 focus:ring-2 focus:ring-red-200"
            : "border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-[#007bff]"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
