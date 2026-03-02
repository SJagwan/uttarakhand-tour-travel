import { Send, Map, Calendar } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function HowItWorks({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "howItWorks" });

  const steps = [
    {
      icon: <Send className="w-8 h-8 text-green-600" />,
      title: t("steps.step1.title"),
      description: t("steps.step1.description"),
    },
    {
      icon: <Map className="w-8 h-8 text-green-600" />,
      title: t("steps.step2.title"),
      description: t("steps.step2.description"),
    },
    {
      icon: <Calendar className="w-8 h-8 text-green-600" />,
      title: t("steps.step3.title"),
      description: t("steps.step3.description"),
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tighter uppercase italic">
            How It <span className="text-green-600">Works?</span>
          </h2>
          <div className="w-24 h-2 bg-green-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-12 z-0" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative z-10 flex flex-col items-center text-center group animate-in fade-in slide-in-from-right-8 duration-700"
              style={{
                animationDelay: `${i * 200}ms`,
                animationFillMode: "both",
              }}
            >
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl mb-8 group-hover:scale-110 transition-transform duration-500 border-4 border-green-500">
                {step.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase italic">
                {step.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed max-w-[250px]">
                {step.description}
              </p>
              <div className="mt-6 text-4xl font-black text-slate-200 tracking-tighter italic">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
