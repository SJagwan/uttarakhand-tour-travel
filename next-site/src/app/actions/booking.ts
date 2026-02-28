"use server";

import { z } from "zod";

/**
 * PRODUCTION BOOKING ACTION
 * React 19 Server Action for handling booking lead submissions.
 * Since there is no backend, we forward to Google Apps Script.
 */

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw8GUmITFt0csDcXR7UXt8ESX5N_xz9HF1jcAsUUqmqB-jAyyYY2ikASp4P6GbJNjBS/exec";

// Strict validation schema matching the original Vite project structure
const BookingSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Invalid Indian phone number"),
  passengers: z.coerce.number().min(1, "At least 1 person required").max(25, "Maximum 25 persons allowed"),
  date: z.string().min(1, "Please select a travel date"),
  destination: z.string().min(1, "Please specify a destination"),
  pickup: z.string().optional(),
  message: z.string().optional(),
});

export type BookingState = {
  success?: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};

export async function submitBooking(
  prevState: BookingState, 
  formData: FormData
): Promise<BookingState> {
  const rawData = Object.fromEntries(formData.entries());
  const validated = BookingSchema.safeParse(rawData);

  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors as Record<string, string[]>,
      message: "Validation failed. Please correct the fields above.",
    };
  }

  try {
    // Forward to Google Apps Script using the exact field names expected by the script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(validated.data),
    });

    if (!response.ok) {
      throw new Error("Google Apps Script failed");
    }

    return {
      success: true,
      message: "Enquiry sent! We will call you within 2 hours to confirm details.",
    };
  } catch (error) {
    console.error("Booking submission error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try calling us directly.",
    };
  }
}
