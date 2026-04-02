import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[\d\s()+-]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z
    .string()
    .min(10, "Please describe what you need (at least 10 characters)")
    .max(2000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const serviceTypes = [
  { value: "general-maintenance", label: "General Maintenance" },
  { value: "suspension", label: "Suspension Repair" },
  { value: "interior-appliance", label: "Interior Appliance Repair" },
  { value: "exterior-cosmetic", label: "Exterior & Cosmetic" },
  { value: "collision", label: "Collision Repair" },
  { value: "restoration", label: "Full Restoration" },
  { value: "hitches-accessories", label: "Hitches & Accessories" },
  { value: "solar-batteries", label: "Solar & Batteries" },
  { value: "other", label: "Other" },
] as const;
