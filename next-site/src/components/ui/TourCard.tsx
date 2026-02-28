import Image from "next/image";
import { Link } from "@/i18n/routing";
import { TourPackage } from "@/types/api.types";
import { MapPin, Clock, ArrowRight, Star, CheckCircle2 } from "lucide-react";

interface Props {
  tour: TourPackage;
}

/**
 * UPGRADED TOUR CARD (Holidify Style)
 * Optimized for high-conversion visual hierarchy.
 */
export default function TourCard({ tour }: Props) {
  return (
    <div className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
      {/* Image Container with Duration Overlay */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={tour.mainImage.url}
          alt={tour.mainImage.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
        
        {/* Duration Badge */}
        <div className="absolute top-5 left-5 px-4 py-2 bg-slate-900/90 backdrop-blur-md rounded-2xl text-[10px] font-black uppercase tracking-widest text-white shadow-xl flex items-center gap-2">
          <Clock size={12} className="text-green-400" />
          {tour.durationNights}N / {tour.durationDays}D
        </div>

        {/* Rating Badge */}
        <div className="absolute top-5 right-5 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-xl shadow-lg flex items-center gap-1.5">
          <Star size={12} className="text-amber-500 fill-amber-500" />
          <span className="text-xs font-black text-slate-900">{tour.rating}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-black text-slate-900 group-hover:text-green-600 transition-colors line-clamp-1 tracking-tighter uppercase italic mb-4">
          {tour.title}
        </h3>

        {/* Route Path (Visualized like Holidify) */}
        <div className="flex items-center gap-2 mb-6 overflow-hidden">
          {tour.routePath.map((stop, i) => (
            <div key={i} className="flex items-center gap-2 shrink-0">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{stop}</span>
              {i < tour.routePath.length - 1 && (
                <ArrowRight size={10} className="text-slate-300" />
              )}
            </div>
          ))}
        </div>

        {/* Highlights Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tour.highlights.slice(0, 3).map((h, i) => (
            <span key={i} className="px-3 py-1 bg-green-50 text-green-700 text-[9px] font-black uppercase tracking-widest rounded-lg flex items-center gap-1">
              <CheckCircle2 size={10} /> {h}
            </span>
          ))}
        </div>
        
        {/* Pricing and Action */}
        <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Starting Price</p>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black text-slate-900 leading-none tracking-tighter italic">
                ₹{tour.price.toLocaleString("en-IN")}
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase">/ Person</span>
            </div>
          </div>
          
          <Link
            href={`/tours/${tour.slug}`}
            className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center hover:bg-green-600 transition-all shadow-lg hover:-translate-y-1"
          >
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
