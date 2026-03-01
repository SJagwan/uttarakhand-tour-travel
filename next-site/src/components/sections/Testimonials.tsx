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
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tighter uppercase italic">
            {t("heading").split(" ")[0]}{" "}
            <span className="text-green-600">{t("heading").split(" ")[1]}</span>
          </h2>
          <div className="w-24 h-2 bg-green-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group p-10 bg-slate-50 rounded-[40px] hover:bg-slate-900 hover:text-white hover:shadow-2xl transition-all duration-500 border border-transparent animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{
                animationDelay: `${i * 150}ms`,
                animationFillMode: "both",
              }}
            >
              <div className="mb-8 flex justify-between items-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-green-600 transition-colors duration-500">
                  <Quote
                    size={24}
                    className="text-green-600 group-hover:text-white transition-colors duration-500"
                  />
                </div>
                <div className="flex gap-1 text-amber-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={14} fill="currentColor" />
                  ))}
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
