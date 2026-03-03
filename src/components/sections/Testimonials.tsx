import { Star, Quote } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function Testimonials({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "testimonials" });

  const testimonials = [
    {
      name: t("reviews.0.name"),
      location: t("reviews.0.location"),
      text: t("reviews.0.text"),
    },
    {
      name: t("reviews.1.name"),
      location: t("reviews.1.location"),
      text: t("reviews.1.text"),
    },
    {
      name: t("reviews.2.name"),
      location: t("reviews.2.location"),
      text: t("reviews.2.text"),
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-block py-1 px-3 rounded-full bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
            {t("heading").split(" ")[0]}
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tighter uppercase italic">
            {t("heading").split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-green-500">{t("heading").split(" ").slice(-1)}</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-transparent rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group p-10 bg-white rounded-[32px] shadow-2xl hover:shadow-green-900/20 hover:-translate-y-2 transition-all duration-500 border border-slate-100/50 hover:border-green-500/30 relative overflow-hidden"
              style={{
                animationDelay: `${i * 150}ms`,
                animationFillMode: "both",
              }}
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                <Quote size={120} className="text-slate-900 rotate-12" />
              </div>

              <div className="mb-8 flex justify-between items-center relative z-10">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-green-50 transition-colors duration-500">
                  <Quote
                    size={20}
                    className="text-green-600"
                  />
                </div>
                <div className="flex gap-1 text-amber-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              
              <p className="text-lg text-slate-700 font-medium leading-relaxed mb-8 relative z-10">
                &quot;{t.text}&quot;
              </p>
              
              <div className="pt-6 border-t border-slate-100 flex items-center gap-4 relative z-10">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold uppercase">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-900 tracking-tight leading-none mb-1">
                    {t.name}
                  </h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-green-600 transition-colors">
                    {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
