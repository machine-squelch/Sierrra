import { z } from "zod";

export const vehicleTypes = [
  { value: "class-a", label: "Class A Motorhome" },
  { value: "class-b", label: "Class B / Camper Van" },
  { value: "class-c", label: "Class C Motorhome" },
  { value: "fifth-wheel", label: "Fifth Wheel" },
  { value: "travel-trailer", label: "Travel Trailer" },
  { value: "toy-hauler", label: "Toy Hauler" },
  { value: "pop-up", label: "Pop-Up / Folding Trailer" },
  { value: "truck-camper", label: "Truck Camper" },
  { value: "heavy-truck", label: "Heavy-Duty Truck" },
  { value: "other", label: "Other" },
] as const;

export const bookingServices = [
  {
    value: "general-maintenance",
    label: "General Maintenance",
    estimate: "2–4 hours",
    icon: "wrench",
  },
  {
    value: "suspension",
    label: "Suspension Repair",
    estimate: "Half day",
    icon: "truck",
  },
  {
    value: "interior-appliance",
    label: "Interior Appliance Repair",
    estimate: "2–6 hours",
    icon: "home",
  },
  {
    value: "exterior-cosmetic",
    label: "Exterior & Cosmetic",
    estimate: "1–3 days",
    icon: "paint",
  },
  {
    value: "collision",
    label: "Collision Repair",
    estimate: "Varies",
    icon: "shield",
  },
  {
    value: "restoration",
    label: "Full Restoration",
    estimate: "Multi-week",
    icon: "sparkles",
  },
  {
    value: "hitches",
    label: "Hitches & Accessories",
    estimate: "1–3 hours",
    icon: "cube",
  },
  {
    value: "solar",
    label: "Solar & Batteries",
    estimate: "Half day",
    icon: "bolt",
  },
  {
    value: "inspection",
    label: "Pre-Purchase Inspection",
    estimate: "2–3 hours",
    icon: "clipboard",
  },
  {
    value: "emergency",
    label: "Emergency / Mobile Repair",
    estimate: "ASAP",
    icon: "phone",
  },
] as const;

export const stepServiceSchema = z.object({
  services: z.array(z.string()).min(1, "Select at least one service"),
});

export const stepVehicleSchema = z.object({
  vehicleType: z.string().min(1, "Select a vehicle type"),
  year: z
    .string()
    .regex(/^\d{4}$/, "Enter a 4-digit year")
    .refine(
      (v) => {
        const n = Number(v);
        return n >= 1960 && n <= new Date().getFullYear() + 1;
      },
      { message: "Enter a valid year" }
    ),
  make: z.string().min(1, "Enter the make").max(50),
  model: z.string().min(1, "Enter the model").max(50),
  notes: z.string().max(1000).optional(),
});

export const stepDateSchema = z.object({
  date: z.string().min(1, "Select a date"),
  time: z.string().min(1, "Select a time slot"),
});

export const stepContactSchema = z.object({
  name: z.string().min(2, "Name is required").max(100),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .max(20)
    .regex(/^[\d\s()+-]+$/, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  preferContact: z.enum(["phone", "email", "text"]),
});

export type StepServiceData = z.infer<typeof stepServiceSchema>;
export type StepVehicleData = z.infer<typeof stepVehicleSchema>;
export type StepDateData = z.infer<typeof stepDateSchema>;
export type StepContactData = z.infer<typeof stepContactSchema>;

export type BookingData = StepServiceData &
  StepVehicleData &
  StepDateData &
  StepContactData;
