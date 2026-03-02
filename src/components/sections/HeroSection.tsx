import { Link } from "@/i18n/routing";
import { getTranslations } from 'next-intl/server';
import HeroCarousel from "./HeroCarousel";

export default async function HeroSection({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'hero' });
  const common = await getTranslations({ locale, namespace: 'common' });

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden group">
      <HeroCarousel />

      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 uppercase italic tracking-tighter">
          {t('heading')}
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-10 text-slate-100 font-light leading-relaxed">
          {t('subheading')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/tours"
            locale={locale as any}
            className="w-full sm:w-auto px-10 py-5 bg-green-600 hover:bg-green-700 text-white rounded-full font-black uppercase italic tracking-widest transition-all shadow-xl hover:shadow-green-600/20 text-xs"
          >
            {t('bookNow')}
          </Link>
          <Link
            href="/contact"
            locale={locale as any}
            className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white rounded-full font-black uppercase italic tracking-widest transition-all text-xs"
          >
            {common('customItinerary')}
          </Link>
        </div>
      </div>
    </section>
  );
}
