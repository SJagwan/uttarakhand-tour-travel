import { Metadata } from "next";
import { getAllDestinations } from "@/lib/api/tours";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { MapPin } from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'hi' ? 'उत्तराखंड के पर्यटन स्थल' : 'Explore Uttarakhand Destinations',
    description: locale === 'hi' 
      ? 'उत्तराखंड के शीर्ष पर्यटन स्थलों जैसे केदारनाथ, बद्रीनाथ, नैनीताल के बारे में जानें।' 
      : 'Discover the top travel destinations in Uttarakhand including Kedarnath, Badrinath, Nainital and more.',
  };
}

export default async function DestinationsPage({ params }: Props) {
  const { locale } = await params;
  const destinations = await getAllDestinations(locale);

  return (
    <div className="bg-white min-h-screen">
      <header className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">
            Top <span className="text-green-600 not-italic">Destinations</span>
          </h1>
          <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            The ultimate guide to the most spiritual and scenic locations across the land of Gods.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {destinations.map((dest: any, index: number) => (
            <Link 
              key={dest.id} 
              href={`/destinations/${dest.slug}`}
              className="group block animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <Image
                  src={dest.img}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin size={14} className="text-green-400" />
                    <span className="text-[10px] font-black uppercase tracking-widest italic">Explore</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter italic">{dest.name}</h3>
                </div>
              </div>
              <h4 className="text-lg font-black text-slate-900 mb-2 group-hover:text-green-600 transition-colors uppercase tracking-tight italic">
                {dest.tagline}
              </h4>
              <p className="text-slate-500 text-sm font-medium line-clamp-2 leading-relaxed">
                {dest.description}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
