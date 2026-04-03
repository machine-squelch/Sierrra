"use client";

import { useState } from "react";
import type { BookingData } from "@/lib/booking";
import { StepService } from "./StepService";
import { StepVehicle } from "./StepVehicle";
import { StepDate } from "./StepDate";
import { StepContact } from "./StepContact";
import { StepReview } from "./StepReview";
import { StepConfirmation } from "./StepConfirmation";

const steps = [
  { id: 1, label: "Service" },
  { id: 2, label: "Vehicle" },
  { id: 3, label: "Date & Time" },
  { id: 4, label: "Contact" },
  { id: 5, label: "Review" },
];

export function BookingWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<Partial<BookingData>>({
    services: [],
    vehicleType: "",
    year: "",
    make: "",
    model: "",
    notes: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
    preferContact: "phone",
  });

  function update(partial: Partial<BookingData>) {
    setData((prev) => ({ ...prev, ...partial }));
  }

  function next() {
    setCurrentStep((s) => Math.min(s + 1, 5));
  }

  function back() {
    setCurrentStep((s) => Math.max(s - 1, 1));
  }

  function goTo(step: number) {
    if (step < currentStep) setCurrentStep(step);
  }

  function handleSubmit() {
    // Replace with real API call
    setSubmitted(true);
  }

  if (submitted) {
    return <StepConfirmation data={data as BookingData} />;
  }

  return (
    <div>
      {/* Progress bar */}
      <nav aria-label="Booking progress" className="mb-8">
        <ol className="flex items-center">
          {steps.map((step, i) => {
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;
            return (
              <li
                key={step.id}
                className={`flex items-center ${i < steps.length - 1 ? "flex-1" : ""}`}
              >
                <button
                  onClick={() => goTo(step.id)}
                  disabled={step.id > currentStep}
                  className={`flex items-center gap-2 group ${
                    step.id > currentStep ? "cursor-default" : "cursor-pointer"
                  }`}
                >
                  <span
                    className={`flex items-center justify-center w-9 h-9 rounded-full text-sm font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-[#007bff] text-white scale-110 shadow-lg shadow-blue-200"
                        : isCompleted
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {isCompleted ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      step.id
                    )}
                  </span>
                  <span
                    className={`hidden sm:block text-sm font-medium transition-colors ${
                      isActive
                        ? "text-[#007bff]"
                        : isCompleted
                          ? "text-green-600 group-hover:text-green-700"
                          : "text-gray-400"
                    }`}
                  >
                    {step.label}
                  </span>
                </button>
                {i < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-3 rounded transition-colors duration-500 ${
                      isCompleted ? "bg-green-400" : "bg-gray-200"
                    }`}
                  />
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      {/* Step content */}
      <div className="min-h-[400px]">
        {currentStep === 1 && (
          <StepService data={data} update={update} next={next} />
        )}
        {currentStep === 2 && (
          <StepVehicle data={data} update={update} next={next} back={back} />
        )}
        {currentStep === 3 && (
          <StepDate data={data} update={update} next={next} back={back} />
        )}
        {currentStep === 4 && (
          <StepContact data={data} update={update} next={next} back={back} />
        )}
        {currentStep === 5 && (
          <StepReview data={data} back={back} goTo={goTo} onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
}
