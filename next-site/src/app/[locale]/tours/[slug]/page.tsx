import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTourBySlug, getAllTourSlugs } from "@/lib/api/tours";
import { generateTourSchema } from "@/lib/seo/schema";
import BookingWidget from "@/components/sections/BookingWidget";

import {
  Clock,
  Star,
  MapPin,
  CheckCircle2,
  XCircle,
  Info,
  ChevronDown,
  Calendar,
} from "lucide-react";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const tour = await getTourBySlug(slug, locale);
  if (!tour) return { title: "Tour Not Found" };

  return {
    title: `${tour.title} - ${tour.durationNights}N/${tour.durationDays}D Package | Best Price`,
    description: tour.shortDescription,
  };
}

export async function generateStaticParams() {
  const slugs = await getAllTourSlugs();
  const locales = ["en", "hi"];
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export default async function TourDetailPage({ params }: Props) {
  const { slug, locale } = await params;
  const tour = await getTourBySlug(slug, locale);

  if (!tour) notFound();

  const schema = generateTourSchema(tour);

  return (
    <article className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Header */}
      <header className="relative w-full h-[60vh] md:h-[75vh] bg-slate-900 overflow-hidden">
        <Image
          src={tour.mainImage.url}
          alt={tour.mainImage.alt}
          fill
          priority
          className="object-cover opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-24 text-white">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-4 mb-8 items-center">
              <span className="bg-green-600 px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] italic shadow-xl">
                {tour.durationNights}N / {tour.durationDays}D Package
              </span>
              {tour.rating && tour.reviewCount && (
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-2xl border border-white/10">
                  <Star size={14} className="text-amber-400 fill-amber-400" />
                  <span className="text-sm font-black uppercase italic tracking-widest">
                    {tour.rating} ({tour.reviewCount} Reviews)
                  </span>
                </div>
              )}
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[0.85] tracking-tighter uppercase italic animate-in fade-in slide-in-from-bottom-8 duration-1000">
              {tour.title}
            </h1>
            <div className="flex items-center gap-3 text-slate-300">
              <MapPin size={18} className="text-green-500" />
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                {tour.routePath.map((stop, i) => (
                  <span
                    key={i}
                    className="text-xs font-bold uppercase tracking-widest whitespace-nowrap"
                  >
                    {stop} {i < tour.routePath.length - 1 && "→ "}
                  </span>
                ))}
              </div>
            </div>
            {tour.bestTime && (
              <div className="flex items-center gap-3 mt-4 text-green-400">
                <Calendar size={18} />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Best Time: {tour.bestTime}
                </span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-start">
          <div className="lg:col-span-2 space-y-24">
            {/* Overview */}
            <section>
              <h2 className="text-4xl font-black text-slate-900 mb-10 tracking-tighter uppercase italic flex items-center gap-4">
                <Info size={32} className="text-green-600" /> Package Overview
              </h2>
              <p className="text-slate-600 text-xl leading-relaxed font-medium">
                {tour.longDescription}
              </p>
            </section>

            {/* Highlights */}
            <section className="bg-slate-50 rounded-[40px] p-12 border border-slate-100">
              <h2 className="text-3xl font-black text-slate-900 mb-10 tracking-tighter uppercase italic">
                Key Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {tour.highlights.map((h, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-sm text-green-600 shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors duration-500">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="text-lg font-bold text-slate-700 tracking-tight">
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section>
              <h2 className="text-4xl font-black text-slate-900 mb-12 tracking-tighter uppercase italic">
                Detailed Itinerary
              </h2>
              <div className="space-y-8">
                {tour.itinerary.map((item, i) => (
                  <div
                    key={i}
                    className="relative pl-12 border-l-4 border-slate-100 pb-12 last:pb-0"
                  >
                    <div className="absolute -left-[14px] top-0 w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-lg ring-1 ring-green-600/20" />
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-50 hover:shadow-xl transition-all duration-500 group">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                        <span className="px-4 py-1.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl italic">
                          Day {item.day}
                        </span>
                        <div className="flex gap-2">
                          {item.meals?.map((meal) => (
                            <span
                              key={meal}
                              className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-lg"
                            >
                              # {meal}
                            </span>
                          ))}
                        </div>
                      </div>
                      <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase italic group-hover:text-green-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 font-medium leading-relaxed mb-6 italic">
                        {item.description}
                      </p>
                      {item.accommodation && (
                        <div className="flex items-center gap-3 pt-6 border-t border-slate-100">
                          <MapPin size={16} className="text-green-600" />
                          <span className="text-xs font-black uppercase tracking-widest text-slate-400">
                            Stay:{" "}
                            <span className="text-slate-900">
                              {item.accommodation}
                            </span>
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Inclusions / Exclusions */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-12 bg-green-50 rounded-[40px] border border-green-100">
                <h3 className="text-2xl font-black text-green-900 mb-8 tracking-tighter uppercase italic flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-green-600" />{" "}
                  Inclusions
                </h3>
                <ul className="space-y-5">
                  {tour.inclusions.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm font-bold text-green-800 tracking-tight leading-none italic"
                    >
                      <span className="text-green-600 italic">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-12 bg-slate-50 rounded-[40px] border border-slate-100">
                <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic flex items-center gap-3">
                  <XCircle size={24} className="text-slate-400" /> Exclusions
                </h3>
                <ul className="space-y-5">
                  {tour.exclusions.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm font-bold text-slate-400 tracking-tight leading-none italic"
                    >
                      <span className="text-red-400">✗</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Sticky Booking Widget */}
          <aside className="lg:sticky lg:top-32">
            <BookingWidget
              tourId={tour.id}
              tourTitle={tour.title}
              basePrice={tour.price}
            />
            <div className="mt-8 p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 italic">
                Cancellation Policy
              </h4>
              <p className="text-[10px] font-bold text-slate-400 leading-relaxed tracking-tight">
                * Cancellation before 30 days: 100% Refund <br />
                * Cancellation 15-30 days: 50% Refund <br />* Cancellation less
                than 15 days: No Refund
              </p>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
