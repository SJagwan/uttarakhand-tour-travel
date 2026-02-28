import { Metadata } from "next";
import { getAllTours } from "@/lib/api/tours";
import TourCard from "@/components/ui/TourCard";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'hi' ? 'सभी टूर पैकेज' : 'All Tour Packages',
    description: locale === 'hi' 
      ? 'हमारे सभी उत्तराखंड टूर पैकेजों की सूची देखें।' 
      : 'Browse our complete list of Uttarakhand tour packages.',
  };
}

/**
 * PRODUCTION-GRADE TOURS LISTING PAGE
 * Scalable: Automatically displays every tour added to the translation JSON.
 */
export default async function ToursPage({ params }: Props) {
  const { locale } = await params;
  const tours = await getAllTours(locale);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-slate-900 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-green-600/10 opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase italic">
            All <span className="text-green-500 not-italic">Packages</span>
          </h1>
          <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Explore our diverse collection of spiritual, adventure, and leisure tours across Uttarakhand.
          </p>
        </div>
      </header>

      {/* Grid */}
      <main className="container mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="flex items-center gap-4">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Filter By:</span>
            <div className="flex gap-2">
              <span className="px-4 py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-full cursor-default">All</span>
              <span className="px-4 py-2 bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-full cursor-not-allowed">Pilgrimage</span>
              <span className="px-4 py-2 bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-full cursor-not-allowed">Hill Stations</span>
            </div>
          </div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Showing {tours.length} results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tours.map((tour: any, index: number) => (
            <div 
              key={tour.id} 
              className="animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              <TourCard tour={tour} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
