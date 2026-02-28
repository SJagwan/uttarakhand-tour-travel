import { ShieldCheck, Users, Clock, MapPin, Wallet, Zap } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
    title: "Safe & Secure",
    description: "Verified local operators and modern vehicles for a worry-free journey."
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "Expert Guides",
    description: "Our drivers are local experts who know the best hidden spots in the mountains."
  },
  {
    icon: <Clock className="w-8 h-8 text-green-600" />,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your travel needs and emergencies."
  },
  {
    icon: <Wallet className="w-8 h-8 text-green-600" />,
    title: "Best Price",
    description: "Transparent pricing with no hidden costs. Best value for your money."
  },
  {
    icon: <MapPin className="w-8 h-8 text-green-600" />,
    title: "Custom Tours",
    description: "Tailor-made itineraries to match your interests and budget."
  },
  {
    icon: <Zap className="w-8 h-8 text-green-600" />,
    title: "Easy Booking",
    description: "Instant quotes and easy confirmation. No complex paperwork."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tighter uppercase italic">
            Why <span className="text-green-600">Choose Us?</span>
          </h2>
          <p className="text-slate-500 font-medium text-lg leading-relaxed">
            We are dedicated to providing the most authentic and comfortable experience of Uttarakhand. 
            Here is what makes us the preferred choice for thousands of travelers.
          </p>
          <div className="mt-8 w-24 h-2 bg-green-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="group p-8 bg-slate-50 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-slate-100 animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}
            >
              <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-green-600 transition-colors duration-500">
                <div className="group-hover:text-white transition-colors duration-500">
                  {f.icon}
                </div>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase italic group-hover:text-green-600 transition-colors">
                {f.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
