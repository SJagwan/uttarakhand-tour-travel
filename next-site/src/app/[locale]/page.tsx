import HeroSection from '@/components/sections/HeroSection';
import FeaturedTours from '@/components/sections/FeaturedTours';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import OurFleet from '@/components/sections/OurFleet';
import HowItWorks from '@/components/sections/HowItWorks';
import Testimonials from '@/components/sections/Testimonials';
import HomeBookingSection from '@/components/sections/HomeBookingSection';
import { generateLocalBusinessSchema } from '@/lib/seo/schema';
import { Metadata } from 'next';
import { Suspense } from 'react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: locale === 'hi' ? 'उत्तराखंड टूर एंड ट्रेवल्स' : 'Uttarakhand Tour & Travels',
    description: locale === 'hi' 
      ? 'उत्तराखंड के लिए अपनी यात्रा बुक करें। ' 
      : 'Book your perfect trip to Uttarakhand.',
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const schema = generateLocalBusinessSchema();

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <HeroSection />

      <Suspense fallback={<div className="h-96 w-full flex items-center justify-center bg-slate-50">Loading experiences...</div>}>
        <FeaturedTours locale={locale} />
      </Suspense>

      <WhyChooseUs />

      <OurFleet />

      <HowItWorks />

      <Testimonials />

      <HomeBookingSection />

    </main>
  );
}
