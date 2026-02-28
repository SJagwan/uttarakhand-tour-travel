import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Delhi",
    text: "The best experience we had in Kedarnath! The driver was very polite and the car was super clean."
  },
  {
    name: "Anjali Verma",
    location: "Mumbai",
    text: "Highly recommended for family trips. They took care of everything from pickup to drop."
  },
  {
    name: "Amit Patel",
    location: "Gujarat",
    text: "Professional service and very transparent pricing. Will definitely book again."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tighter uppercase italic">
            Happy <span className="text-green-600">Travelers</span>
          </h2>
          <div className="w-24 h-2 bg-green-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="group p-10 bg-slate-50 rounded-[40px] hover:bg-slate-900 hover:text-white hover:shadow-2xl transition-all duration-500 border border-transparent animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${i * 150}ms`, animationFillMode: 'both' }}
            >
              <div className="mb-8 flex justify-between items-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-green-600 transition-colors duration-500">
                  <Quote size={24} className="text-green-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="flex gap-1 text-amber-500">
                  {[1,2,3,4,5].map(star => <Star key={star} size={14} fill="currentColor" />)}
                </div>
              </div>
              <p className="text-lg font-bold leading-relaxed mb-8 italic tracking-tight">
                "{t.text}"
              </p>
              <div className="pt-6 border-t border-slate-200 group-hover:border-slate-800 transition-colors duration-500">
                <h4 className="text-xl font-black uppercase tracking-tighter italic leading-none mb-1">
                  {t.name}
                </h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-green-600 transition-colors">
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
