import { Metadata } from "next";
import { getAllTours } from "@/lib/api/tours";
import TourCard from "@/components/ui/TourCard";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "navbar" });
  const c = await getTranslations({ locale, namespace: "common" });

  return {
    title: `${c("packages")} | ${t("logo")}`,
    description:
      locale === "hi"
        ? "हमारे सभी उत्तराखंड टूर पैकेजों की सूची देखें।"
        : "Browse our complete list of Uttarakhand tour packages.",
  };
}

/**
 * PRODUCTION-GRADE TOURS LISTING PAGE
 * Scalable: Automatically displays every tour added to the translation JSON.
 */
export default async function ToursPage({ params }: Props) {
  const { locale } = await params;
  const tours = await getAllTours(locale);
  const t = await getTranslations({ locale, namespace: "common" });

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-slate-900 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-green-600/10 opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase italic">
            {locale === "hi" ? "सभी" : "All"}{" "}
            <span className="text-green-500 not-italic">{t("packages")}</span>
          </h1>
          <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            {locale === "hi"
              ? "उत्तराखंड में हमारे आध्यात्मिक, साहसिक और अवकाश पर्यटन के विविध संग्रह का अन्वेषण करें।"
              : "Explore our diverse collection of spiritual, adventure, and leisure tours across Uttarakhand."}
          </p>
        </div>
      </header>

      {/* Grid */}
      <main className="container mx-auto px-4 py-24">
        <div className="flex justify-end mb-16">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            {locale === "hi" ? "दिखा रहा है" : "Showing"} {tours.length}{" "}
            {locale === "hi" ? "परिणाम" : "results"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tours.map((tour: any, index: number) => (
            <div
              key={tour.id}
              className="animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <TourCard tour={tour} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

