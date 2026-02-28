import Image from "next/image";
import { ShieldCheck, Award, MapPin, Users, Phone, Mail } from "lucide-react";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'aboutPage.metadata' });
  
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      languages: {
        'en': '/en/about',
        'hi': '/hi/about',
      },
    },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'aboutPage' });

  return (
    <div className="bg-white">
      {/* Narrative Hero */}
      <header className="bg-slate-900 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-green-600/5" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic leading-none">
            {t('hero.title')} <span className="text-green-500 not-italic">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="text-slate-400 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed italic">
            {t('hero.subtitle')}
          </p>
        </div>
      </header>

      {/* About Section */}
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="aspect-square bg-slate-100 rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl relative z-10">
              <Image
                src="/uttarakhand-hero.jpg"
                alt="Uttarakhand Tour & Travels"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="hidden md:block absolute -bottom-10 -right-10 w-64 h-64 bg-green-600 rounded-[40px] -z-0 animate-pulse opacity-20" />
          </div>

          <div className="space-y-8 lg:space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-50 text-green-700 rounded-full text-xs font-bold uppercase tracking-widest">
              <Award size={16} /> {t('aboutSection.badge')}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.2] lg:leading-[1.1]">
              {t('aboutSection.heading')} <br />
              <span className="text-green-600">
                {t('aboutSection.headingHighlight')}
              </span>
            </h2>
            <div className="space-y-5 text-slate-600 text-base md:text-lg font-medium leading-relaxed">
              <p>
                {t('aboutSection.paragraph1')}
              </p>
              <p>
                {t.rich('aboutSection.paragraph2', {
                  strong: (chunks) => <strong className="text-slate-900 font-bold">{chunks}</strong>
                })}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 md:gap-8 pt-8 border-t border-slate-100">
              <div>
                <p className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tighter">
                  {t('aboutSection.stats.trips')}
                </p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  {t('aboutSection.stats.tripsLabel')}
                </p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tighter">
                  {t('aboutSection.stats.fleet')}
                </p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  {t('aboutSection.stats.fleetLabel')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Trust Pillars */}
      <section className="bg-slate-50 py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">
              {t('pillars.heading')} <span className="text-green-600">{t('pillars.headingHighlight')}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: t('pillars.items.expertise.title'),
                icon: <MapPin size={32} />,
                desc: t('pillars.items.expertise.desc'),
              },
              {
                title: t('pillars.items.safety.title'),
                icon: <ShieldCheck size={32} />,
                desc: t('pillars.items.safety.desc'),
              },
              {
                title: t('pillars.items.booking.title'),
                icon: <Users size={32} />,
                desc: t('pillars.items.booking.desc'),
              },
            ].map((p, i) => (
              <div
                key={i}
                className="p-12 bg-white rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 text-center group"
              >
                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-green-600 mx-auto mb-8 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  {p.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase italic">
                  {p.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-32 bg-green-600 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter uppercase italic">
            {t('contact.heading')}
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <a
              href="mailto:info@uttarakhandtourandtravels.co.in"
              className="flex items-center justify-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all shadow-2xl"
            >
              <Mail size={20} /> {t('contact.emailBtn')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
