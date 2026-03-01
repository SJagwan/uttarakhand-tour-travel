import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getDestinationBySlug, getAllDestSlugs } from "@/lib/api/tours";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import {
  MapPin,
  Calendar,
  Info,
  ArrowRight,
  Mountain,
  Star,
} from "lucide-react";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const dest = await getDestinationBySlug(slug, locale);

  if (!dest) return { title: "Destination Not Found" };

  return {
    title: `${dest.name} Travel Guide | Uttarakhand Tourism`,
    description: dest.description,
  };
}

export async function generateStaticParams() {
  const slugs = await getAllDestSlugs();
  const locales = ["en", "hi"];
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export default async function DestinationDetailPage({ params }: Props) {
  const { slug, locale } = await params;
  const dest = await getDestinationBySlug(slug, locale);
  const t = await getTranslations({ locale, namespace: "common" });
  const nav = await getTranslations({ locale, namespace: "navbar" });

  if (!dest) notFound();

  return (
    <article className="bg-white min-h-screen">
      {/* Informational Hero */}
      <header className="relative w-full h-[60vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <Image
          src={dest.img}
          alt={dest.name}
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="relative z-10 text-center text-white px-4">
          <div className="flex items-center justify-center gap-2 mb-4 animate-in fade-in slide-in-from-top-4 duration-700">
            <MapPin size={20} className="text-green-500" />
            <span className="text-xs font-black uppercase tracking-[0.3em] italic">
              Ultimate Travel Guide
            </span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter uppercase italic leading-none animate-in fade-in slide-in-from-bottom-4 duration-700">
            {dest.name}
          </h1>
          <p className="text-xl md:text-2xl font-medium tracking-tight italic opacity-90">
            {dest.tagline}
          </p>
        </div>
      </header>

      {/* Guide Content */}
      <main className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Detailed Info */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic flex items-center gap-4">
                <Info size={32} className="text-green-600" /> About {dest.name}
              </h2>
              <div className="text-slate-600 text-lg leading-relaxed font-medium space-y-6">
                <p>{dest.description}</p>
              </div>
            </section>

            {dest.topSpots && dest.topSpots.length > 0 && (
              <section>
                <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic flex items-center gap-4">
                  <Star size={28} className="text-green-600" /> Top Attractions
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {dest.topSpots.map((spot: string, i: number) => (
                    <div
                      key={i}
                      className="group flex items-start gap-5 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 font-black shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors">
                        <MapPin size={24} />
                      </div>
                      <div className="flex flex-col justify-center min-h-[56px]">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                          Highlight 0{i + 1}
                        </span>
                        <span className="font-bold text-slate-900 text-lg leading-tight group-hover:text-green-600 transition-colors">
                          {spot}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* CTA & Quick Facts */}
          <aside className="space-y-8 lg:sticky lg:top-24">
            {/* Quick Facts Card */}
            <div className="bg-slate-50 rounded-[40px] p-10 border border-slate-100">
              <h3 className="text-xl font-black text-slate-900 mb-8 tracking-tight uppercase italic border-b border-slate-200 pb-4">
                Quick Facts
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2">
                    <Calendar size={12} className="text-green-600" />{" "}
                    {t("bestTime")}
                  </p>
                  <p className="font-bold text-slate-900 leading-tight">
                    {dest.bestTime}
                  </p>
                </div>

                {dest.altitude && (
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2">
                      <Mountain size={12} className="text-green-600" /> Altitude
                    </p>
                    <p className="font-bold text-slate-900 leading-tight">
                      {dest.altitude}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-slate-900 rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 translate-x-4">
                <ArrowRight size={150} />
              </div>
              <h3 className="text-3xl font-black mb-6 tracking-tighter uppercase italic leading-none">
                Ready to <br />
                <span className="text-green-500">Experience?</span>
              </h3>
              <p className="text-slate-400 text-sm font-medium mb-10 leading-relaxed">
                Book a private Tempo Traveller or Car for your trip to{" "}
                {dest.name} with our local experts.
              </p>
              <Link
                href="/tours"
                locale={locale as any}
                className="w-full py-5 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-black uppercase italic tracking-widest transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-green-600/30"
              >
                Explore {nav("links.booking")} <ArrowRight size={18} />
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </article>
  );
}
