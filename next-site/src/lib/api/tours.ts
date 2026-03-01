import { TourPackage, ItineraryDay } from "@/types/api.types";
import { getMessages } from "next-intl/server";

/**
 * PRODUCTION-GRADE CONTENT ENGINE
 * Advanced Mapping for Holidify-style Tour Packages
 */

const generateDestSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const generateTourSlug = (name: string) => {
  const base = generateDestSlug(name);
  return base.endsWith("-tour") ? base : `${base}-tour`;
};

/**
 * Helper to generate a realistic 4-day itinerary for any destination
 */
const getDefaultItinerary = (destName: string): ItineraryDay[] => [
  {
    day: 1,
    title: `Arrival & Transfer to ${destName}`,
    description: `Arrival at the meeting point and private transfer to your hotel. Evening at leisure.`,
    meals: ["Dinner"],
    accommodation: "3-Star Hotel",
  },
  {
    day: 2,
    title: `Sightseeing & Local Exploration`,
    description: `Full day guided tour of the key attractions in ${destName}. Explore the local culture and landmarks.`,
    meals: ["Breakfast", "Dinner"],
    accommodation: "3-Star Hotel",
  },
  {
    day: 3,
    title: `Extended Exploration / Adventure`,
    description: `Day for adventure activities or visiting nearby hidden spots. Perfect for photography and nature walks.`,
    meals: ["Breakfast", "Dinner"],
    accommodation: "3-Star Hotel",
  },
  {
    day: 4,
    title: `Return Journey`,
    description: `Morning breakfast and transfer back to the drop-off point. Tour concludes with happy memories.`,
    meals: ["Breakfast"],
  },
];

/**
 * SPECIFIC ITINERARIES FOR DHAM YATRAS
 */
const getYatraItinerary = (name: string, locale: string): ItineraryDay[] => {
  const isHi = locale === "hi";
  const lowerName = name.toLowerCase();

  // Detection logic that works for both English and Hindi
  const isCharDham =
    lowerName.includes("char dham") || lowerName.includes("चार धाम");
  const isDoDham =
    lowerName.includes("do dham") || lowerName.includes("दो धाम");
  const isTeenDham =
    lowerName.includes("teen dham") || lowerName.includes("तीन धाम");

  if (isCharDham) {
    return [
      {
        day: 1,
        title: isHi
          ? "हरिद्वार/ऋषिकेश से बरकोट"
          : "Haridwar/Rishikesh to Barkot",
        description: isHi
          ? "आपके चुने हुए पिकअप बिंदु (हरिद्वार, ऋषिकेश, या देहरादून) से पिकअप और बरकोट के लिए प्रस्थान।"
          : "Pickup from your chosen point (Haridwar, Rishikesh, or Dehradun) and drive to Barkot.",
        meals: ["Dinner"],
        accommodation: "Barkot Hotel",
      },
      {
        day: 2,
        title: isHi
          ? "यमुनोत्री दर्शन और बरकोट वापसी"
          : "Yamunotri Darshan & Return",
        description: isHi
          ? "जानकी चट्टी तक ड्राइव, फिर यमुनोत्री मंदिर के लिए ट्रेक। दर्शन के बाद बरकोट वापसी।"
          : "Drive to Janki Chatti, trek to Yamunotri Temple. Return to Barkot after Darshan.",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Barkot Hotel",
      },
      {
        day: 3,
        title: isHi ? "बरकोट से उत्तरकाशी" : "Barkot to Uttarkashi",
        description: isHi
          ? "उत्तरकाशी के लिए प्रस्थान और काशी विश्वनाथ मंदिर दर्शन।"
          : "Drive to Uttarkashi and visit the famous Kashi Vishwanath Temple.",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Uttarkashi Hotel",
      },
      {
        day: 4,
        title: isHi
          ? "गंगोत्री दर्शन और उत्तरकाशी वापसी"
          : "Gangotri Darshan & Return",
        description: isHi
          ? "सुंदर हर्षिल घाटी होते हुए गंगोत्री मंदिर दर्शन और वापस उत्तरकाशी।"
          : "Drive via scenic Harsil Valley to Gangotri Temple. Return to Uttarkashi.",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Uttarkashi Hotel",
      },
      {
        day: 5,
        title: isHi ? "उत्तरकाशी से गुप्तकाशी" : "Uttarkashi to Guptkashi",
        description: isHi
          ? "गुप्तकाशी के लिए लंबी ड्राइव।"
          : "Long scenic drive to Guptkashi. Evening at leisure.",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Guptkashi Hotel",
      },
      {
        day: 6,
        title: isHi ? "गुप्तकाशी से केदारनाथ" : "Guptkashi to Kedarnath",
        description: isHi
          ? "सोनप्रयाग/गौरीकुंड तक ड्राइव और केदारनाथ के लिए ट्रेक। केदारनाथ में रात्रि विश्राम।"
          : "Drive to Sonprayag/Gaurikund and trek up to Kedarnath Temple. Overnight stay in Kedarnath.",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Kedarnath Guest House",
      },
      {
        day: 7,
        title: isHi ? "केदारनाथ से गुप्तकाशी" : "Kedarnath to Guptkashi",
        description: isHi
          ? "सुबह के दर्शन, नीचे ट्रेक और गुप्तकाशी वापसी।"
          : "Early morning Darshan, trek down to Gaurikund, and return to Guptkashi.",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Guptkashi Hotel",
      },
      {
        day: 8,
        title: isHi ? "गुप्तकाशी से बद्रीनाथ" : "Guptkashi to Badrinath",
        description: isHi
          ? "जोशीमठ होते हुए बद्रीनाथ धाम के लिए प्रस्थान। शाम की आरती।"
          : "Drive via Joshimath to Badrinath Dham. Attend evening Aarti.",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Badrinath Hotel",
      },
      {
        day: 9,
        title: isHi ? "बद्रीनाथ से रुद्रप्रयाग" : "Badrinath to Rudraprayag",
        description: isHi
          ? "माणा गांव (अंतिम भारतीय गांव) का भ्रमण और रुद्रप्रयाग के लिए वापसी ड्राइव।"
          : "Visit Mana Village (Last Indian Village) and return drive to Rudraprayag.",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Rudraprayag Hotel",
      },
      {
        day: 10,
        title: isHi
          ? "रुद्रप्रयाग से हरिद्वार/ऋषिकेश"
          : "Rudraprayag to Haridwar/Rishikesh",
        description: isHi
          ? "देवप्रयाग संगम होते हुए वापसी यात्रा और हरिद्वार/ऋषिकेश में ड्रॉप।"
          : "Return journey via Devprayag Sangam and drop off at Haridwar or Rishikesh.",
        meals: ["Breakfast"],
      },
    ];
  }

  if (isDoDham) {
    return [
      {
        day: 1,
        title: isHi
          ? "हरिद्वार/देहरादून से गुप्तकाशी"
          : "Haridwar/Dehradun to Guptkashi",
        description: isHi
          ? "आपके पिकअप बिंदु से गुप्तकाशी के लिए प्रस्थान। रास्ते में देवप्रयाग का सुंदर दृश्य।"
          : "Pickup from Haridwar or Dehradun and drive to Guptkashi via Devprayag.",
        meals: ["Dinner"],
        accommodation: "Guptkashi Hotel",
      },
      {
        day: 2,
        title: isHi ? "गुप्तकाशी से केदारनाथ" : "Guptkashi to Kedarnath",
        description: isHi
          ? "सोनप्रयाग तक ड्राइव और केदारनाथ मंदिर के लिए ट्रेक। केदारनाथ में रात्रि विश्राम।"
          : "Drive to Sonprayag and trek up to Kedarnath Temple. Overnight stay in Kedarnath.",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Kedarnath Guest House",
      },
      {
        day: 3,
        title: isHi
          ? "केदारनाथ से गुप्तकाशी वापसी"
          : "Kedarnath to Guptkashi Return",
        description: isHi
          ? "सुबह के दर्शन, गौरीकुंड तक नीचे ट्रेक और गुप्तकाशी वापसी।"
          : "Early morning Darshan, trek down to Gaurikund, and return drive to Guptkashi.",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Guptkashi Hotel",
      },
      {
        day: 4,
        title: isHi ? "गुप्तकाशी से पीपलकोटी" : "Guptkashi to Pipalkoti",
        description: isHi
          ? "चोपटा के सुंदर मार्ग से पीपलकोटी के लिए प्रस्थान।"
          : "Drive via the scenic Chopta route towards Pipalkoti.",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Pipalkoti Hotel",
      },
      {
        day: 5,
        title: isHi
          ? "पीपलकोटी - बद्रीनाथ - पीपलकोटी"
          : "Pipalkoti - Badrinath - Pipalkoti",
        description: isHi
          ? "बद्रीनाथ धाम दर्शन और माणा गांव का भ्रमण, फिर पीपलकोटी वापसी।"
          : "Day trip to Badrinath Temple for Darshan and Mana Village, returning to Pipalkoti.",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Pipalkoti Hotel",
      },
      {
        day: 6,
        title: isHi ? "पीपलकोटी से वापसी" : "Pipalkoti to Departure",
        description: isHi
          ? "ऋषिकेश होते हुए वापसी यात्रा और हरिद्वार/देहरादून में ड्रॉप।"
          : "Return journey via Rishikesh and drop off at Haridwar or Dehradun.",
        meals: ["Breakfast"],
      },
    ];
  }

  if (isTeenDham) {
    return [
      {
        day: 1,
        title: isHi
          ? "हरिद्वार/देहरादून से बरकोट"
          : "Haridwar/Dehradun to Barkot",
        description: isHi
          ? "आपके पिकअप बिंदु से बरकोट के लिए प्रस्थान।"
          : "Pickup from your chosen point and drive to Barkot.",
        meals: ["Dinner"],
        accommodation: "Barkot Hotel",
      },
      {
        day: 2,
        title: isHi
          ? "यमुनोत्री दर्शन और बरकोट वापसी"
          : "Yamunotri Darshan & Return",
        description: isHi
          ? "यमुनोत्री मंदिर की पवित्र यात्रा और दर्शन के बाद बरकोट वापसी।"
          : "Trek to Yamunotri Temple for Darshan and return to Barkot.",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Barkot Hotel",
      },
      {
        day: 3,
        title: isHi ? "बरकोट से गुप्तकाशी" : "Barkot to Guptkashi",
        description: isHi
          ? "गुप्तकाशी के लिए लंबी और सुंदर ड्राइव।"
          : "Long scenic drive from Barkot directly to Guptkashi.",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Guptkashi Hotel",
      },
      {
        day: 4,
        title: isHi ? "गुप्तकाशी से केदारनाथ" : "Guptkashi to Kedarnath",
        description: isHi
          ? "सोनप्रयाग तक ड्राइव और केदारनाथ मंदिर के लिए ट्रेक। केदारनाथ में रात्रि विश्राम।"
          : "Drive to Sonprayag and trek up to Kedarnath Temple. Overnight stay in Kedarnath.",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Kedarnath Guest House",
      },
      {
        day: 5,
        title: isHi
          ? "केदारनाथ से गुप्तकाशी वापसी"
          : "Kedarnath to Guptkashi Return",
        description: isHi
          ? "सुबह के दर्शन, नीचे ट्रेक और गुप्तकाशी वापसी।"
          : "Early morning Darshan, trek down to Gaurikund, and return to Guptkashi.",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Guptkashi Hotel",
      },
      {
        day: 6,
        title: isHi ? "गुप्तकाशी से बद्रीनाथ" : "Guptkashi to Badrinath",
        description: isHi
          ? "जोशीमठ होते हुए बद्रीनाथ धाम के लिए प्रस्थान और शाम की आरती।"
          : "Drive to Badrinath Dham via Joshimath. Attend evening Aarti.",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Badrinath Hotel",
      },
      {
        day: 7,
        title: isHi ? "बद्रीनाथ से रुद्रप्रयाग" : "Badrinath to Rudraprayag",
        description: isHi
          ? "माणा गांव का भ्रमण और रुद्रप्रयाग के लिए वापसी ड्राइव।"
          : "Morning visit to Mana Village, then return drive to Rudraprayag.",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Rudraprayag Hotel",
      },
      {
        day: 8,
        title: isHi ? "रुद्रप्रयाग से वापसी" : "Rudraprayag to Departure",
        description: isHi
          ? "ऋषिकेश होते हुए वापसी यात्रा और हरिद्वार/देहरादून में ड्रॉप।"
          : "Return journey via Rishikesh and drop off at Haridwar or Dehradun.",
        meals: ["Breakfast"],
      },
    ];
  }

  const isNainitalCorbett =
    lowerName.includes("nainital") || lowerName.includes("नैनीताल");
  const isAuliChopta = lowerName.includes("auli") || lowerName.includes("औली");

  if (isNainitalCorbett) {
    return [
      {
        day: 1,
        title: isHi
          ? "देहरादून/हरिद्वार से नैनीताल"
          : "Dehradun/Haridwar to Nainital",
        description: isHi
          ? "आपके पिकअप बिंदु से नैनीताल के लिए सुंदर ड्राइव। शाम को माल रोड और नैनी झील की सैर।"
          : "Pickup from Dehradun or Haridwar and scenic drive to Nainital. Evening walk along the Mall Road and Naini Lake.",
        meals: ["Dinner"],
        accommodation: "Nainital Hotel",
      },
      {
        day: 2,
        title: isHi ? "नैनीताल स्थानीय दर्शन" : "Nainital Local Sightseeing",
        description: isHi
          ? "नैना देवी मंदिर, स्नो व्यू पॉइंट और प्रसिद्ध झीलों (भीमताल, नौकुचियाताल) का भ्रमण।"
          : "Visit Naina Devi Temple, Snow View Point, and explore the famous lakes (Bhimtal, Naukuchiatal).",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Nainital Hotel",
      },
      {
        day: 3,
        title: isHi ? "नैनीताल से जिम कॉर्बेट" : "Nainital to Jim Corbett",
        description: isHi
          ? "जिम कॉर्बेट नेशनल पार्क के लिए ड्राइव। रास्ते में कॉर्बेट फॉल्स का दर्शन और रिसॉर्ट में विश्राम।"
          : "Drive to Jim Corbett National Park. Visit Corbett Falls en route and relax at the wildlife resort.",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Corbett Resort",
      },
      {
        day: 4,
        title: isHi ? "जंगल सफारी और वापसी" : "Jungle Safari & Departure",
        description: isHi
          ? "सुबह-सुबह रोमांचक जीप सफारी, नाश्ता और फिर देहरादून या हरिद्वार के लिए वापसी।"
          : "Early morning thrilling Jeep Safari. Post breakfast, return drive to Dehradun or Haridwar.",
        meals: ["Breakfast"],
      },
    ];
  }

  if (isAuliChopta) {
    return [
      {
        day: 1,
        title: isHi
          ? "देहरादून/हरिद्वार से चोपटा"
          : "Dehradun/Haridwar to Chopta",
        description: isHi
          ? "देवप्रयाग संगम होते हुए चोपटा के लिए सुंदर ड्राइव। शाम को मानार्थ बोनफायर का आनंद लें।"
          : "Scenic drive to Chopta via Devprayag. Evening sunset and complimentary bonfire.",
        meals: ["Dinner"],
        accommodation: "Chopta Camp/Hotel",
      },
      {
        day: 2,
        title: isHi
          ? "तुंगनाथ और चंद्रशिला ट्रेक"
          : "Tungnath & Chandrashila Trek",
        description: isHi
          ? "दुनिया के सबसे ऊंचे शिव मंदिर (तुंगनाथ) और वैकल्पिक चंद्रशिला चोटी के लिए स्नो ट्रेक।"
          : "Snow trek to Tungnath (highest Shiva temple) and optional climb to Chandrashila Peak.",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Chopta Camp/Hotel",
      },
      {
        day: 3,
        title: isHi ? "चोपटा से जोशीमठ" : "Chopta to Joshimath",
        description: isHi
          ? "पहाड़ों के खूबसूरत दृश्यों और फोटो स्टॉप के साथ जोशीमठ के लिए प्रस्थान।"
          : "Scenic mountain drive with valley photo stops to Joshimath. Evening at leisure.",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Joshimath Hotel",
      },
      {
        day: 4,
        title: isHi ? "औली स्नो डे (मुख्य आकर्षण)" : "Auli Snow Day",
        description: isHi
          ? "औली रोपवे की सवारी (पैकेज में शामिल)। स्नो प्ले, स्कीइंग और नंदा देवी के नज़ारों का आनंद लें।"
          : "Take the included Auli Ropeway. Enjoy snow play, optional skiing, and Nanda Devi views.",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Joshimath Hotel",
      },
      {
        day: 5,
        title: isHi ? "जोशीमठ से वापसी" : "Joshimath to Departure",
        description: isHi
          ? "सुबह प्रस्थान और देहरादून या हरिद्वार में आपके चुने हुए स्थान पर ड्रॉप।"
          : "Morning departure and scenic downhill drive. Drop at Dehradun or Haridwar.",
        meals: ["Breakfast"],
      },
    ];
  }

  return getDefaultItinerary(name);
};

export async function getAllTours(locale: string): Promise<TourPackage[]> {
  const messages = (await getMessages({ locale })) as any;
  const places = messages.destinations.places;
  const yatras = messages.destinations.yatra || [];

  // Map specialized Yatra packages FIRST
  const yatraTours = yatras.map((y: any) => {
    const days = parseInt(y.duration.split(" ")[0]);
    const nights = parseInt(y.duration.split("/")[1].trim().split(" ")[0]);

    return {
      id: y.name,
      slug: y.slug || generateTourSlug(y.name),
      title: y.name,
      shortDescription: y.tagline,
      longDescription: y.description,
      price: parseInt(y.price),
      currency: "INR",
      durationDays: days,
      durationNights: nights,
      itinerary: getYatraItinerary(y.name, locale),
      inclusions: [
        "Private Transport",
        "Hotel Stay",
        "All Meals (MAP)",
        "Guided Darshan",
      ],
      exclusions: [
        "Personal Expenses",
        "Pony/Palki Charges",
        "Helicopter Tickets (Optional)",
        "GST Extra",
      ],
      routePath: y.route.split("→").map((s: string) => s.trim()),
      highlights: y.highlights,
      gallery: [
        {
          type: "vehicle",
          url: "/uttarakhand-hero.jpg",
          alt: "Our Premium Tempo Traveller",
        },
        {
          type: "hotel",
          url: "/destinations/kedarnath.jpg",
          alt: "Luxury Stay near Temple",
        },
        {
          type: "location",
          url: "/destinations/badrinath.jpg",
          alt: "Scenic View from Badrinath",
        },
      ],
      mainImage: { url: y.img, alt: y.name, width: 1200, height: 800 },
      destination: { id: "yatra", name: "Spiritual Yatra", slug: "yatra" },
      isFeatured: true,
      tags: ["Spiritual", "Premium"],
      bestTime: y.bestTime,
    };
  });

  // Return only the curated multi-day packages (e.g., Dham Yatras)
  // We no longer auto-generate a standalone package for every single destination.
  return yatraTours;
}

export async function getTourBySlug(
  slug: string,
  locale: string,
): Promise<TourPackage | null> {
  const tours = await getAllTours(locale);
  return tours.find((t) => t.slug === slug) || null;
}

export async function getAllTourSlugs(): Promise<string[]> {
  const tours = await getAllTours("en");
  return tours.map((t) => t.slug);
}

// Destination Fetchers (Kept separate for Entity SEO)
export async function getAllDestinations(locale: string) {
  const messages = (await getMessages({ locale })) as any;
  return messages.destinations.places.map((p: any) => ({
    id: p.name,
    slug: p.slug || generateDestSlug(p.name),
    name: p.name,
    tagline: p.tagline,
    description: p.description,
    img: p.img,
    bestTime: p.bestTime,
    altitude: p.altitude,
    topSpots: p.topSpots,
  }));
}

export async function getDestinationBySlug(slug: string, locale: string) {
  const dests = await getAllDestinations(locale);
  return dests.find((d: any) => d.slug === slug) || null;
}

export async function getAllDestSlugs(): Promise<string[]> {
  const dests = await getAllDestinations("en");
  return dests.map((d: any) => d.slug);
}
