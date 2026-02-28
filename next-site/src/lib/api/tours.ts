import { TourPackage, ItineraryDay } from "@/types/api.types";
import { getMessages } from 'next-intl/server';

/**
 * PRODUCTION-GRADE CONTENT ENGINE
 * Advanced Mapping for Holidify-style Tour Packages
 */

const generateDestSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');
const generateTourSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-') + '-tour';

/**
 * Helper to generate a realistic 4-day itinerary for any destination
 */
const getDefaultItinerary = (destName: string): ItineraryDay[] => [
  { day: 1, title: `Arrival & Transfer to ${destName}`, description: `Arrival at the meeting point and private transfer to your hotel. Evening at leisure.`, meals: ["Dinner"], accommodation: "3-Star Hotel" },
  { day: 2, title: `Sightseeing & Local Exploration`, description: `Full day guided tour of the key attractions in ${destName}. Explore the local culture and landmarks.`, meals: ["Breakfast", "Dinner"], accommodation: "3-Star Hotel" },
  { day: 3, title: `Extended Exploration / Adventure`, description: `Day for adventure activities or visiting nearby hidden spots. Perfect for photography and nature walks.`, meals: ["Breakfast", "Dinner"], accommodation: "3-Star Hotel" },
  { day: 4, title: `Return Journey`, description: `Morning breakfast and transfer back to the drop-off point. Tour concludes with happy memories.`, meals: ["Breakfast"] }
];

/**
 * SPECIFIC ITINERARIES FOR DHAM YATRAS
 */
const getYatraItinerary = (name: string, locale: string): ItineraryDay[] => {
  const isHi = locale === 'hi';
  const lowerName = name.toLowerCase();
  
  // Detection logic that works for both English and Hindi
  const isCharDham = lowerName.includes('char dham') || lowerName.includes('चार धाम');
  const isDoDham = lowerName.includes('do dham') || lowerName.includes('दो धाम');
  const isTeenDham = lowerName.includes('teen dham') || lowerName.includes('तीन धाम');

  if (isCharDham) {
    return [
      { day: 1, title: isHi ? "दिल्ली से हरिद्वार" : "Delhi to Haridwar", description: isHi ? "दिल्ली से हरिद्वार के लिए प्रस्थान और शाम को गंगा आरती।" : "Drive from Delhi to Haridwar. Attend the evening Ganga Aarti.", meals: ["Dinner"], accommodation: "Standard Hotel" },
      { day: 2, title: isHi ? "हरिद्वार से बरकोट" : "Haridwar to Barkot", description: isHi ? "बरकोट के लिए ड्राइव, रास्ते में मसूरी और केम्प्टी फॉल्स।" : "Drive to Barkot via Mussoorie and Kempty Falls.", meals: ["Breakfast", "Dinner"], accommodation: "Barkot Camp/Hotel" },
      { day: 3, title: isHi ? "यमुनोत्री दर्शन" : "Yamunotri Darshan", description: isHi ? "यमुनोत्री मंदिर की यात्रा और पवित्र स्नान।" : "Trek to Yamunotri Temple and holy dip in Surya Kund.", meals: ["Breakfast", "Dinner"], accommodation: "Barkot Camp/Hotel" },
      { day: 4, title: isHi ? "बरकोट से उत्तरकाशी" : "Barkot to Uttarkashi", description: isHi ? "उत्तरकाशी के लिए प्रस्थान और काशी विश्वनाथ मंदिर दर्शन।" : "Drive to Uttarkashi and visit Kashi Vishwanath Temple.", meals: ["Breakfast", "Dinner"], accommodation: "Uttarkashi Hotel" },
      { day: 5, title: isHi ? "गंगोत्री दर्शन" : "Gangotri Darshan", description: isHi ? "गंगोत्री मंदिर दर्शन और गंगा पूजन।" : "Drive to Gangotri for Darshan and holy dip in Ganges.", meals: ["Breakfast", "Dinner"], accommodation: "Uttarkashi Hotel" },
      { day: 6, title: isHi ? "उत्तरकाशी से गुप्तकाशी" : "Uttarkashi to Guptkashi", description: isHi ? "गुप्तकाशी के लिए लंबी ड्राइव, मंदाकिनी नदी के किनारे।" : "A scenic drive to Guptkashi along the Mandakini river.", meals: ["Breakfast", "Dinner"], accommodation: "Guptkashi Hotel" },
      { day: 7, title: isHi ? "केदारनाथ प्रस्थान" : "Kedarnath Arrival", description: isHi ? "केदारनाथ के लिए ट्रेक या हेलीकॉप्टर यात्रा।" : "Trek to Kedarnath or take a helicopter. Attend evening Aarti.", meals: ["Breakfast", "Dinner"], accommodation: "Kedarnath Guest House" },
      { day: 8, title: isHi ? "केदारनाथ से गुप्तकाशी" : "Kedarnath to Guptkashi", description: isHi ? "सुबह के दर्शन और वापस गुप्तकाशी वापसी।" : "Early morning Darshan and return trek to Guptkashi.", meals: ["Breakfast", "Dinner"], accommodation: "Guptkashi Hotel" },
      { day: 9, title: isHi ? "गुप्तकाशी से बद्रीनाथ" : "Guptkashi to Badrinath", description: isHi ? "बद्रीनाथ धाम के लिए प्रस्थान और शाम की आरती।" : "Drive to Badrinath Dham and attend evening Aarti.", meals: ["Breakfast", "Dinner"], accommodation: "Badrinath Hotel" },
      { day: 10, title: isHi ? "बद्रीनाथ से ऋषिकेश" : "Badrinath to Rishikesh", description: isHi ? "ऋषिकेश के लिए प्रस्थान, रास्ते में देवप्रयाग संगम।" : "Drive to Rishikesh, visit Devprayag Sangam on the way.", meals: ["Breakfast", "Dinner"], accommodation: "Rishikesh Hotel" },
      { day: 11, title: isHi ? "ऋषिकेश से दिल्ली" : "Rishikesh to Delhi", description: isHi ? "ऋषिकेश दर्शन और वापस दिल्ली वापसी।" : "Morning local Rishikesh sightseeing and return to Delhi.", meals: ["Breakfast"] }
    ];
  }

  if (isDoDham) {
    return [
      { day: 1, title: isHi ? "हरिद्वार से गुप्तकाशी" : "Haridwar to Guptkashi", description: isHi ? "हरिद्वार से गुप्तकाशी के लिए ड्राइव।" : "Drive from Haridwar to Guptkashi.", meals: ["Dinner"], accommodation: "Guptkashi Hotel" },
      { day: 2, title: isHi ? "केदारनाथ यात्रा" : "Kedarnath Journey", description: isHi ? "केदारनाथ मंदिर के लिए ट्रेक और दर्शन।" : "Trek to Kedarnath Temple for Darshan.", meals: ["Breakfast", "Dinner"], accommodation: "Kedarnath Guest House" },
      { day: 3, title: isHi ? "केदारनाथ से बद्रीनाथ" : "Kedarnath to Badrinath", description: isHi ? "बद्रीनाथ धाम के लिए प्रस्थान।" : "Drive to Badrinath Dham via Joshimath.", meals: ["Breakfast", "Dinner"], accommodation: "Badrinath Hotel" },
      { day: 4, title: isHi ? "बद्रीनाथ से ऋषिकेश" : "Badrinath to Rishikesh", description: isHi ? "ऋषिकेश के लिए वापसी यात्रा।" : "Return drive to Rishikesh.", meals: ["Breakfast", "Dinner"], accommodation: "Rishikesh Hotel" },
      { day: 5, title: isHi ? "ऋषिकेश से हरिद्वार" : "Rishikesh to Haridwar", description: isHi ? "ऋषिकेश दर्शन और टूर का समापन।" : "Local sightseeing and drop at Haridwar.", meals: ["Breakfast"] }
    ];
  }

  if (isTeenDham) {
    return [
      { day: 1, title: isHi ? "हरिद्वार से बरकोट" : "Haridwar to Barkot", description: isHi ? "बरकोट के लिए प्रस्थान।" : "Drive to Barkot.", meals: ["Dinner"], accommodation: "Barkot Hotel" },
      { day: 2, title: isHi ? "यमुनोत्री दर्शन" : "Yamunotri Darshan", description: isHi ? "यमुनोत्री मंदिर की पवित्र यात्रा।" : "Visit to the holy Yamunotri shrine.", meals: ["Breakfast", "Dinner"], accommodation: "Barkot Hotel" },
      { day: 3, title: isHi ? "बरकोट से उत्तरकाशी" : "Barkot to Uttarkashi", description: isHi ? "उत्तरकाशी के लिए प्रस्थान।" : "Drive to Uttarkashi.", meals: ["Breakfast", "Dinner"], accommodation: "Uttarkashi Hotel" },
      { day: 4, title: isHi ? "गंगोत्री दर्शन" : "Gangotri Darshan", description: isHi ? "गंगोत्री मंदिर दर्शन।" : "Visit to Gangotri Temple.", meals: ["Breakfast", "Dinner"], accommodation: "Uttarkashi Hotel" },
      { day: 5, title: isHi ? "उत्तरकाशी से गुप्तकाशी" : "Uttarkashi to Guptkashi", description: isHi ? "गुप्तकाशी के लिए प्रस्थान।" : "Drive to Guptkashi.", meals: ["Breakfast", "Dinner"], accommodation: "Guptkashi Hotel" },
      { day: 6, title: isHi ? "केदारनाथ यात्रा" : "Kedarnath Journey", description: isHi ? "केदारनाथ दर्शन।" : "Visit to Kedarnath shrine.", meals: ["Breakfast", "Dinner"], accommodation: "Kedarnath Guest House" },
      { day: 7, title: isHi ? "केदारनाथ से ऋषिकेश" : "Kedarnath to Rishikesh", description: isHi ? "ऋषिकेश वापसी।" : "Return drive to Rishikesh.", meals: ["Breakfast", "Dinner"], accommodation: "Rishikesh Hotel" },
      { day: 8, title: isHi ? "ऋषिकेश से हरिद्वार" : "Rishikesh to Haridwar", description: isHi ? "टूर का समापन।" : "End of tour at Haridwar.", meals: ["Breakfast"] }
    ];
  }

  return getDefaultItinerary(name);
};

export async function getAllTours(locale: string): Promise<TourPackage[]> {
  const messages = await getMessages({ locale }) as any;
  const places = messages.destinations.places;
  const yatras = messages.destinations.yatra || [];

  // Map specialized Yatra packages FIRST
  const yatraTours = yatras.map((y: any) => {
    const days = parseInt(y.duration.split(' ')[0]);
    const nights = parseInt(y.duration.split('/')[1].trim().split(' ')[0]);

    return {
      id: y.name,
      slug: generateTourSlug(y.name),
      title: y.name,
      shortDescription: y.tagline,
      longDescription: y.description,
      price: parseInt(y.price),
      currency: "INR",
      durationDays: days,
      durationNights: nights,
      itinerary: getYatraItinerary(y.name, locale),
      inclusions: ["Private Transport", "Premium Hotel Stay", "All Meals (MAP)", "Guided Darshan"],
      exclusions: ["Personal Expenses", "Pony/Palki Charges", "Helicopter Tickets (Optional)", "GST Extra"],
      routePath: y.route.split('→').map((s: string) => s.trim()),
      highlights: y.highlights,
      gallery: [
        { type: "vehicle", url: "/uttarakhand-hero.jpg", alt: "Our Premium Tempo Traveller" },
        { type: "hotel", url: "/destinations/kedarnath.jpg", alt: "Luxury Stay near Temple" },
        { type: "location", url: "/destinations/badrinath.jpg", alt: "Scenic View from Badrinath" },
      ],
      mainImage: { url: y.img, alt: y.name, width: 1200, height: 800 },
      destination: { id: "yatra", name: "Spiritual Yatra", slug: "yatra" },
      isFeatured: true,
      rating: 4.9,
      reviewCount: 250,
      tags: ["Spiritual", "Premium"]
    };
  });

  // Map individual destination packages
  const destinationTours = places.map((p: any) => {
    const isKedarnath = p.name.toLowerCase().includes('kedarnath');
    const highlights = isKedarnath 
      ? ["VIP Darshan", "Helicopter Assistance", "Expert Guide", "Medical Kit"]
      : ["AC Vehicle", "Luxury Stay", "Local Sightseeing", "24/7 Support"];

    const routePath = isKedarnath
      ? ["Haridwar", "Guptkashi", "Kedarnath", "Rishikesh"]
      : ["Delhi", "Haridwar", p.name, "Dehradun"];

    return {
      id: p.name,
      slug: generateTourSlug(p.name),
      title: locale === 'hi' ? `${p.name} विशेष टूर पैकेज` : `${p.name} Exclusive Tour Package`,
      shortDescription: p.tagline,
      longDescription: p.description,
      price: isKedarnath ? 18500 : 14500,
      currency: "INR",
      durationDays: 4,
      durationNights: 3,
      itinerary: getDefaultItinerary(p.name),
      inclusions: ["Private AC Vehicle", "Accommodation on Twin Sharing", "Breakfast & Dinner", "Toll, Parking & Driver Allowance"],
      exclusions: ["Lunch & Personal Expenses", "Entry Tickets / Porter Charges", "Airfare / Train fare", "GST 5% Extra"],
      routePath: routePath,
      highlights: highlights,
      mainImage: { url: p.img, alt: p.name, width: 1200, height: 800 },
      destination: { id: p.name, name: p.name, slug: generateDestSlug(p.name) },
      isFeatured: true,
      rating: 4.8,
      reviewCount: 120,
      tags: ["Verified", "Local Support"]
    };
  });

  return [...yatraTours, ...destinationTours];
}

export async function getTourBySlug(slug: string, locale: string): Promise<TourPackage | null> {
  const tours = await getAllTours(locale);
  return tours.find(t => t.slug === slug) || null;
}

export async function getAllTourSlugs(): Promise<string[]> {
  const tours = await getAllTours('en');
  return tours.map(t => t.slug);
}

// Destination Fetchers (Kept separate for Entity SEO)
export async function getAllDestinations(locale: string) {
  const messages = await getMessages({ locale }) as any;
  return messages.destinations.places.map((p: any) => ({
    id: p.name,
    slug: generateDestSlug(p.name),
    name: p.name,
    tagline: p.tagline,
    description: p.description,
    img: p.img,
    bestTime: p.bestTime
  }));
}

export async function getDestinationBySlug(slug: string, locale: string) {
  const dests = await getAllDestinations(locale);
  return dests.find((d: any) => d.slug === slug) || null;
}

export async function getAllDestSlugs(): Promise<string[]> {
  const dests = await getAllDestinations('en');
  return dests.map((d: any) => d.slug);
}
