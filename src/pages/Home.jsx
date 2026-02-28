import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import Hero from "../components/home/Hero";
import WhyChooseUs from "../components/home/WhyChooseUs";
import useLanguageSync from "../hooks/useLanguageSync";

const Destinations = React.lazy(() => import("../components/home/Destinations"));
const Testimonials = React.lazy(() => import("../components/home/Testimonials"));
const HowItWorks = React.lazy(() => import("../components/home/HowItWorks"));
const BookingForm = React.lazy(() => import("../components/home/BookingForm"));

export default function Home() {
  const { t, i18n } = useTranslation();
  useLanguageSync();

  return (
    <main className="flex flex-col min-h-screen">
      {/* React 19 Native Metadata Hoisting */}
      <title>{i18n.language === 'hi' ? 'उत्तराखंड टूर एंड ट्रेवल्स' : 'Uttarakhand Tour & Travels - Explore the Divine Land'}</title>
      <meta 
        name="description" 
        content={i18n.language === 'hi' 
          ? 'उत्तराखंड के लिए अपनी यात्रा बुक करें। चार धाम यात्रा, केदारनाथ, बद्रीनाथ के लिए भरोसेमंद सेवा।' 
          : 'Book your perfect trip to Uttarakhand. Reliable tempo travellers and cars for Char Dham Yatra, Kedarnath, and Badrinath.'
        } 
      />

      <Hero />
      <WhyChooseUs />
      <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading...</div>}>
        <Destinations />
        <Testimonials />
        <HowItWorks />
        <BookingForm />
      </Suspense>
    </main>
  );
}
