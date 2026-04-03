"use client";

import { useState, useMemo } from "react";
import { stepDateSchema, type BookingData } from "@/lib/booking";

const timeSlots = [
  { value: "08:00", label: "8:00 AM" },
  { value: "09:00", label: "9:00 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "12:00", label: "12:00 PM" },
  { value: "13:00", label: "1:00 PM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "15:00", label: "3:00 PM" },
  { value: "16:00", label: "4:00 PM" },
];

const saturdaySlots = timeSlots.filter(
  (s) => parseInt(s.value) >= 8 && parseInt(s.value) < 14
);

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

type Props = {
  data: Partial<BookingData>;
  update: (d: Partial<BookingData>) => void;
  next: () => void;
  back: () => void;
};

function isoDate(d: Date) {
  return d.toISOString().split("T")[0];
}

export function StepDate({ data, update, next, back }: Props) {
  const [error, setError] = useState("");
  const today = useMemo(() => new Date(), []);
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());

  const calendarDays = useMemo(() => {
    const firstDay = new Date(viewYear, viewMonth, 1).getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const days: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let d = 1; d <= daysInMonth; d++) days.push(d);
    return days;
  }, [viewMonth, viewYear]);

  function isAvailable(day: number) {
    const date = new Date(viewYear, viewMonth, day);
    const dow = date.getDay();
    // Closed Sunday, and no past dates
    if (dow === 0) return false;
    const todayStr = isoDate(today);
    const dateStr = isoDate(date);
    return dateStr >= todayStr;
  }

  function selectDate(day: number) {
    const dateStr = isoDate(new Date(viewYear, viewMonth, day));
    update({ date: dateStr, time: "" });
    if (error) setError("");
  }

  function slotsForSelected() {
    if (!data.date) return [];
    const dow = new Date(data.date + "T12:00:00").getDay();
    return dow === 6 ? saturdaySlots : timeSlots;
  }

  function prevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  }

  function nextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  }

  function handleNext() {
    const result = stepDateSchema.safeParse({
      date: data.date,
      time: data.time,
    });
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }
    next();
  }

  const selectedDateFormatted = data.date
    ? new Date(data.date + "T12:00:00").toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Pick a preferred date &amp; time
      </h2>
      <p className="text-gray-600 mb-6">
        We&apos;ll confirm availability and reach out if we need to adjust.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar */}
        <div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
            {/* Month navigation */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={prevMonth}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                aria-label="Previous month"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h3 className="font-bold text-gray-900">
                {monthNames[viewMonth]} {viewYear}
              </h3>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                aria-label="Next month"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 gap-1 mb-1">
              {dayNames.map((name) => (
                <div
                  key={name}
                  className="text-center text-xs font-semibold text-gray-400 py-2"
                >
                  {name}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, i) => {
                if (day === null) {
                  return <div key={`empty-${i}`} />;
                }
                const dateStr = isoDate(new Date(viewYear, viewMonth, day));
                const available = isAvailable(day);
                const isSelected = data.date === dateStr;
                const isToday = dateStr === isoDate(today);

                return (
                  <button
                    key={day}
                    onClick={() => available && selectDate(day)}
                    disabled={!available}
                    className={`relative h-10 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isSelected
                        ? "bg-[#007bff] text-white shadow-lg shadow-blue-200 scale-105"
                        : available
                          ? "text-gray-900 hover:bg-blue-50 cursor-pointer"
                          : "text-gray-300 cursor-default"
                    }`}
                  >
                    {day}
                    {isToday && !isSelected && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#007bff]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-3">
            Open Mon–Fri 8 AM – 5:30 PM &middot; Sat 8 AM – 2 PM &middot;
            Closed Sunday
          </p>
        </div>

        {/* Time slots */}
        <div>
          {data.date ? (
            <>
              <h3 className="font-semibold text-gray-900 mb-1">
                {selectedDateFormatted}
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Select a preferred drop-off time:
              </p>
              <div className="grid grid-cols-3 gap-2">
                {slotsForSelected().map((slot) => {
                  const isSelected = data.time === slot.value;
                  return (
                    <button
                      key={slot.value}
                      onClick={() => {
                        update({ time: slot.value });
                        if (error) setError("");
                      }}
                      className={`py-3 px-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-[#007bff] text-white shadow-md shadow-blue-200"
                          : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-[#007bff]"
                      }`}
                    >
                      {slot.label}
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400 text-center">
              <div>
                <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <p className="font-medium">Pick a date to see available times</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-4">{error}</p>
      )}

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
