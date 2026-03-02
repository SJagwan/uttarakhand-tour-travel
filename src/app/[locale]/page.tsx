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
import { getTranslations } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'navbar' });
  const h = await getTranslations({ locale, namespace: 'hero' });
  
  return {
    title: t('logo'),
    description: h('subheading'),
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const schema = generateLocalBusinessSchema();
  const t = await getTranslations({ locale, namespace: 'common' });

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <HeroSection locale={locale} />

      <Suspense fallback={<div className="h-96 w-full flex items-center justify-center bg-slate-50">{t('processing')}</div>}>
        <FeaturedTours locale={locale} />
      </Suspense>

      <WhyChooseUs locale={locale} />

      <OurFleet locale={locale} />

      <HowItWorks locale={locale} />

      <Testimonials locale={locale} />

      <HomeBookingSection />

    </main>
  );
}
