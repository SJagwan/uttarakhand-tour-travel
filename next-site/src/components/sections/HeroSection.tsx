import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-900">
        <Image
          src="/uttarakhand-hero.jpg"
          alt="Divine Uttarakhand"
          fill
          priority
          quality={85}
          className="object-cover object-center opacity-80"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />
      </div>

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
            className="w-full sm:w-auto px-10 py-5 bg-green-600 hover:bg-green-700 text-white rounded-full font-black uppercase italic tracking-widest transition-all shadow-xl hover:shadow-green-600/20 text-xs"
          >
            {t('bookNow')}
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white rounded-full font-black uppercase italic tracking-widest transition-all text-xs"
          >
            Custom Itinerary
          </Link>
        </div>
      </div>
    </section>
  );
}
