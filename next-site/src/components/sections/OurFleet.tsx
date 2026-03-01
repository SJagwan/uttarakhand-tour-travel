import Image from "next/image";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";

const fleet = [
  {
    name: "Luxury Tempo Traveller",
    seats: "13 Seater",
    features: [
      "Fully Air Conditioned",
      "Pushback Seats",
      "Ample Luggage Space",
      "Bluetooth Music System",
    ],
    img: "/fleet/tempo-traveller-front.jpg", // Replace with real photo of your Tempo Traveller
  },
  {
    name: "Premium SUV",
    seats: "6 Seater",
    features: [
      "Neat & Clean Interiors",
      "Experienced Driver",
      "All Uttarakhand Permits",
      "Carrier for Bags",
    ],
    img: "/fleet/ertica-front.jpeg", // Replace with real photo of your Car
  },
];

export default function OurFleet() {
  return (
    <section className="py-24 bg-slate-900 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-600 to-transparent opacity-20" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="animate-in fade-in slide-in-from-left-4 duration-700">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase italic leading-[0.9]">
              Our{" "}
              <span className="text-green-500 not-italic">Private Fleet</span>
            </h2>
            <div className="w-24 h-2 bg-green-600 rounded-full" />
          </div>
          <p className="text-slate-400 text-lg font-medium max-w-md leading-relaxed">
            We don't use third-party cabs. We own and maintain our fleet to
            guarantee your safety and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {fleet.map((vehicle, i) => (
            <div
              key={i}
              className="group bg-white/5 border border-white/10 rounded-[40px] overflow-hidden hover:bg-white/10 transition-all duration-500 animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{
                animationDelay: `${i * 200}ms`,
                animationFillMode: "both",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                  <Image
                    src={vehicle.img}
                    alt={vehicle.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-4 py-2 bg-green-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-xl">
                    Owner Driven
                  </div>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight uppercase italic">
                    {vehicle.name}
                  </h3>
                  <p className="text-green-500 font-black text-sm uppercase tracking-widest mb-6">
                    {vehicle.seats}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {vehicle.features.map((f, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-slate-400 text-sm font-bold italic"
                      >
                        <CheckCircle2 size={16} className="text-green-600" />{" "}
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10 text-[9px] font-black uppercase tracking-widest text-slate-400">
                      <ShieldCheck size={12} className="text-green-600" />{" "}
                      Sanitized
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10 text-[9px] font-black uppercase tracking-widest text-slate-400">
                      <Zap size={12} className="text-green-600" /> GPS Tracked
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
