import { TourPackage } from "@/types/api.types";

/**
 * Generates LocalBusiness Schema for the Home/Contact pages
 */
export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Uttarakhand Tour & Travels",
    "image": `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
    "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/#organization`,
    "url": process.env.NEXT_PUBLIC_SITE_URL,
    "telephone": "+91-9999999999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Road",
      "addressLocality": "Dehradun",
      "addressRegion": "UK",
      "postalCode": "248001",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹"
  };
};

/**
 * Generates TouristTrip Schema for individual Package pages
 */
export const generateTourSchema = (tour: TourPackage) => {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": tour.title,
    "description": tour.shortDescription,
    "tourType": ["Pilgrimage", "Nature"],
    "provider": {
      "@type": "TravelAgency",
      "name": "Uttarakhand Tour & Travels"
    },
    "offers": {
      "@type": "Offer",
      "price": tour.price.toString(),
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": `${process.env.NEXT_PUBLIC_SITE_URL}/tours/${tour.slug}`
    }
  };
};
