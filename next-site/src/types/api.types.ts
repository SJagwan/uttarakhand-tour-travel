/**
 * Core Tour Package Entity (Professional Version)
 * Based on high-converting patterns from Holidify/MakeMyTrip
 */

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  meals?: string[]; // e.g. ["Breakfast", "Dinner"]
  accommodation?: string;
}

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  currency: "INR";
  durationDays: number;
  durationNights: number;
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  routePath: string[]; // e.g. ["Haridwar", "Barkot", "Kedarnath"]
  highlights: string[];
  gallery?: {
    type: "hotel" | "vehicle" | "location";
    url: string;
    alt: string;
  }[];
  mainImage: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  destination: {
    id: string;
    name: string;
    slug: string;
  };
  isFeatured: boolean;
  rating?: number;
  reviewCount?: number;
  tags: string[];
  bestTime?: string;
}

/**
 * Standard API Response Wrapper
 */
export interface ApiResponse<T> {
  data: T;
  meta?: {
    total?: number;
    page?: number;
    lastPage?: number;
  };
  error?: {
    code: string;
    message: string;
  };
}
