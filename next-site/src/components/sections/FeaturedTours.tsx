import { TourPackage } from "@/types/api.types";
import TourCard from "@/components/ui/TourCard";
import { Link } from "@/i18n/routing";
import { getAllTours } from "@/lib/api/tours";
import { getTranslations } from "next-intl/server";

/**
 * PRODUCTION-GRADE FEATURED TOURS (SERVER COMPONENT)
 */
export default async function FeaturedTours({ locale }: { locale: string }) {
  const tours = await getAllTours(locale);
  const featured = tours.slice(0, 3); // Get first 3 as featured
  const t = await getTranslations({ locale, namespace: "common" });

  if (featured.length === 0) return null;

  return (
    <section className="py-24 bg-slate-50 w-full overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div className="animate-in fade-in slide-in-from-left-4 duration-700">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tighter uppercase italic">
              {t("featured")} <br />
              <span className="text-green-600 not-italic">{t("packages")}</span>
            </h2>
            <div className="w-24 h-2 bg-green-600 rounded-full" />
          </div>
          <Link
            href="/tours"
            locale={locale as any}
            className="group inline-flex items-center gap-2 text-slate-900 font-black text-xs uppercase tracking-widest hover:text-green-600 transition-colors border-b-2 border-slate-900 hover:border-green-600 pb-1"
          >
            {t("exploreAll")}
            <span className="group-hover:translate-x-1 transition-transform inline-block">
              →
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featured.map((tour, index) => (
            <div
              key={tour.id}
              className="animate-in fade-in zoom-in-95 duration-700"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "both",
              }}
            >
              <TourCard tour={tour} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
