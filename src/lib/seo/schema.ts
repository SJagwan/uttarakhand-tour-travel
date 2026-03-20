import { TourPackage } from "@/types/api.types";
import { ExperienceVideo } from "@/lib/constants/experience";

/**
 * Generates LocalBusiness Schema for the Home/Contact pages
 */
export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Jagwan Tour & Travels",
    alternateName: [
      "Jagwan Tour and Travel",
      "Uttarakhand Tour and Travels",
      "Jagwan Tour & Travel Dehradun",
    ],
    description:
      "Jagwan Tour & Travels offers premium Uttarakhand tour packages, Char Dham Yatra, vehicle rentals, and custom itineraries. Your trusted local travel agency in Dehradun.",
    image: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
    "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/#organization`,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    telephone: "+91-6395561049",
    email: "jagwan1997@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Main Road",
      addressLocality: "Dehradun",
      addressRegion: "Uttarakhand",
      postalCode: "248001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.3165,
      longitude: 78.0322,
    },
    priceRange: "₹₹",
    sameAs: ["https://www.google.com/search?kgmid=/g/11z1tcb_d6"],
    keywords:
      "Jagwan Tour & Travels, Tour and Travels, Uttarakhand Tour and Travels, Travel Agency Dehradun, Char Dham Yatra",
  };
};

/**
 * Generates TouristTrip Schema for individual Package pages
 */
export const generateTourSchema = (tour: TourPackage) => {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.shortDescription,
    tourType: ["Pilgrimage", "Nature"],
    provider: {
      "@type": "TravelAgency",
      name: "Jagwan Tour & Travels",
    },
    offers: {
      "@type": "Offer",
      price: tour.price.toString(),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/tours/${tour.slug}`,
    },
  };
};

/**
 * Generates VideoObject Schema for the Experience Page
 */
export const generateVideoSchema = (
  videos: ExperienceVideo[],
  locale: string,
) => {
  const validVideos = videos.filter((v) => v.videoUrl && v.thumbnail);

  if (validVideos.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: validVideos.map((video, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "VideoObject",
        name: video.title[locale as "en" | "hi"],
        description: `Cinematic travel experience: ${video.title[locale as "en" | "hi"]} on the ${video.location[locale as "en" | "hi"]}. Brought to you by Jagwan Tour & Travels.`,
        thumbnailUrl: video.thumbnail,
        uploadDate: new Date().toISOString().split("T")[0],
        contentUrl: video.videoUrl,
        embedUrl: video.videoUrl,
        publisher: {
          "@type": "Organization",
          name: "Jagwan Tour & Travels",
          logo: {
            "@type": "ImageObject",
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
          },
        },
      },
    })),
  };
};
