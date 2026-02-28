import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getDestinationBySlug, getAllDestSlugs } from "@/lib/api/tours";
import { Link } from "@/i18n/routing";
import { MapPin, Calendar, Info, ArrowRight } from "lucide-react";

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
  return locales.flatMap(locale => slugs.map(slug => ({ locale, slug })));
}

export default async function DestinationDetailPage({ params }: Props) {
  const { slug, locale } = await params;
  const dest = await getDestinationBySlug(slug, locale);

  if (!dest) notFound();

  return (
    <article className="bg-white min-h-screen">
      {/* Informational Hero */}
      <header className="relative w-full h-[60vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <Image src={dest.img} alt={dest.name} fill priority className="object-cover opacity-60" sizes="100vw" />
        <div className="relative z-10 text-center text-white px-4">
          <div className="flex items-center justify-center gap-2 mb-4 animate-in fade-in slide-in-from-top-4 duration-700">
            <MapPin size={20} className="text-green-500" />
            <span className="text-xs font-black uppercase tracking-[0.3em] italic">Ultimate Travel Guide</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter uppercase italic leading-none animate-in fade-in slide-in-from-bottom-4 duration-700">
            {dest.name}
          </h1>
          <p className="text-xl md:text-2xl font-medium tracking-tight italic opacity-90">{dest.tagline}</p>
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

            <section className="p-10 bg-slate-50 rounded-[40px] border border-slate-100">
              <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight uppercase italic flex items-center gap-3">
                <Calendar size={24} className="text-green-600" /> Best Time to Visit
              </h3>
              <p className="text-slate-600 text-lg font-bold italic tracking-tight bg-white p-6 rounded-2xl shadow-sm inline-block">
                {dest.bestTime}
              </p>
            </section>
          </div>

          {/* CTA: Related Packages */}
          <aside className="lg:sticky lg:top-24">
            <div className="bg-slate-900 rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 translate-x-4">
                <ArrowRight size={150} />
              </div>
              <h3 className="text-3xl font-black mb-6 tracking-tighter uppercase italic leading-none">
                Ready to <br /><span className="text-green-500">Experience?</span>
              </h3>
              <p className="text-slate-400 text-sm font-medium mb-10 leading-relaxed">
                Book a private Tempo Traveller or Car for your trip to {dest.name} with our local experts.
              </p>
              <Link 
                href={`/tours/${slug}-tour`}
                className="w-full py-5 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-black uppercase italic tracking-widest transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-green-600/30"
              >
                View Packages <ArrowRight size={18} />
              </Link>
            </div>
          </aside>

        </div>
      </main>
    </article>
  );
}
