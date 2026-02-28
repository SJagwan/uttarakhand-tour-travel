import Image from "next/image";
import { ShieldCheck, Award, MapPin, Users, Phone, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Narrative Hero */}
      <header className="bg-slate-900 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-green-600/5" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic leading-none">
            Our <span className="text-green-500 not-italic">Story</span>
          </h1>
          <p className="text-slate-400 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed italic">
            "Serving pilgrims and travelers with the spirit of Devbhoomi since 2015."
          </p>
        </div>
      </header>

      {/* Founder Section */}
      <main className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-square bg-slate-100 rounded-[60px] overflow-hidden shadow-2xl relative z-10">
              <Image 
                src="/uttarakhand-hero.jpg" 
                alt="Uttarakhand Tour & Travels Team" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-green-600 rounded-[40px] -z-0 animate-pulse opacity-20" />
          </div>

          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-green-50 text-green-700 rounded-full text-[10px] font-black uppercase tracking-widest italic">
              <Award size={14} /> Established Authority
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase italic leading-[0.9]">
              Led by <br />
              <span className="text-green-600 not-italic">Birbal Singh Jagwan</span>
            </h2>
            <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
              <p>
                Based in the heart of Uttarakhand—Dehradun—we started with a simple mission: to provide safe, comfortable, and spiritually fulfilling journeys to the sacred shrines of the Himalayas.
              </p>
              <p>
                Unlike massive travel portals, we are **local operators**. We own our fleet of Tempo Travellers and Cars. Our drivers are not just employees; they are mountain experts who know every curve of the Garhwal and Kumaon roads.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-100">
              <div>
                <p className="text-3xl font-black text-slate-900 mb-1 tracking-tighter">1000+</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Trips Completed</p>
              </div>
              <div>
                <p className="text-3xl font-black text-slate-900 mb-1 tracking-tighter">10+</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Trust Pillars */}
      <section className="bg-slate-50 py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">The Core <span className="text-green-600">Pillars</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Local Expertise", icon: <MapPin size={32} />, desc: "Real-time updates on weather, road conditions, and temple timings." },
              { title: "Verified Safety", icon: <ShieldCheck size={32} />, desc: "Regularly serviced AC fleet with all necessary permits and insurance." },
              { title: "Direct Booking", icon: <Users size={32} />, desc: "No middleman. You talk directly to the operator, ensuring best prices." }
            ].map((p, i) => (
              <div key={i} className="p-12 bg-white rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 text-center group">
                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-green-600 mx-auto mb-8 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  {p.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase italic">{p.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-32 bg-green-600 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter uppercase italic">Ready to talk?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <a href="tel:+919999999999" className="flex items-center justify-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all shadow-2xl">
              <Phone size={20} /> Call Now
            </a>
            <a href="mailto:info@uttarakhandtourandtravels.co.in" className="flex items-center justify-center gap-4 bg-white text-slate-900 px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-2xl">
              <Mail size={20} /> Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
