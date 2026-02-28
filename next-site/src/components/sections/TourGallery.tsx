import Image from "next/image";
import { Camera, Car, Bed, MapPin } from "lucide-react";

interface GalleryItem {
  type: "hotel" | "vehicle" | "location";
  url: string;
  alt: string;
}

export default function TourGallery({ items }: { items: GalleryItem[] }) {
  if (!items || items.length === 0) return null;

  const getIcon = (type: string) => {
    switch (type) {
      case "vehicle": return <Car size={14} />;
      case "hotel": return <Bed size={14} />;
      default: return <MapPin size={14} />;
    }
  };

  return (
    <section className="space-y-10">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic flex items-center gap-4">
          <Camera size={32} className="text-green-600" /> Experience <span className="text-green-600">Gallery</span>
        </h2>
        <p className="hidden md:block text-[10px] font-black uppercase tracking-widest text-slate-400 italic">
          * Real photos from our recent trips
        </p>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory">
        {items.map((item, i) => (
          <div 
            key={i} 
            className="relative flex-none w-[300px] md:w-[450px] aspect-[4/3] rounded-[40px] overflow-hidden group snap-center shadow-xl border border-slate-100"
          >
            <Image
              src={item.url}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 300px, 450px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            
            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-[10px] font-black uppercase tracking-widest mb-2">
                {getIcon(item.type)} {item.type}
              </div>
              <p className="text-lg font-bold tracking-tight italic">{item.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
