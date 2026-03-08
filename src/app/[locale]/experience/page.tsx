import { Metadata } from "next";
import JourneyVideo from "@/components/ui/JourneyVideo";
import { getTranslations } from "next-intl/server";
import { Play, Sparkles } from "lucide-react";
import { Link } from "@/i18n/routing";
import { EXPERIENCE_VIDEOS } from "@/lib/constants/experience";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "experience" });
  return {
    title: `${t("title")} - ${t("subtitle")}`,
    description: t("description"),
  };
}

export default async function ExperiencePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "experience" });
  const commonT = await getTranslations({ locale, namespace: "common" });

  const allVideos = EXPERIENCE_VIDEOS;

  return (
    <main className="min-h-screen bg-white">
      {/* Dynamic Hero Section */}
      <header className="relative w-full py-24 md:py-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/uttarakhand-hero.jpg')] bg-cover bg-center opacity-30 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900 to-slate-900" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 mb-8">
            <Sparkles size={16} className="text-amber-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white italic">
              {t("heroBadge")}
            </span>
          </div>
          <h1 className="text-4xl md:text-8xl font-black text-white mb-6 leading-[0.85] tracking-tighter uppercase italic">
            {t("heroTitle")} <br />
            <span className="text-green-500">{t("heroTitleHighlight")}</span>
          </h1>
          <p className="text-slate-400 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
            {t("heroSubtitle")}
          </p>
        </div>
      </header>

      {/* Video Grid Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        {allVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {allVideos.map((video) => (
              <div key={video.id} className="space-y-6 group">
                {/* Video Component */}
                <JourneyVideo
                  videoUrl={video.videoUrl}
                  thumbnail={video.thumbnail}
                  title={video.title[locale as "en" | "hi"]}
                />

                {/* Info Overlay - Pure Route Focus */}
                <div className="px-2 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-[1px] bg-green-500" />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-green-600">
                      {video.location[locale as "en" | "hi"]}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase italic leading-[0.9] group-hover:text-green-600 transition-colors">
                    {video.title[locale as "en" | "hi"]}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-40 bg-slate-50 rounded-[40px] border border-dashed border-slate-200">
            <Play size={48} className="mx-auto text-slate-200 mb-6" />
            <h3 className="text-xl font-black text-slate-400 uppercase italic tracking-widest">
              {t("noVideos")}
            </h3>
            <p className="text-slate-400 mt-2">{t("checkBack")}</p>
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 pb-32">
        <div className="bg-green-600 rounded-[40px] p-8 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase italic tracking-tighter leading-none">
              {t("ctaTitle")}
            </h2>
            <p className="text-white/80 max-w-xl mx-auto font-medium text-lg mb-12">
              {t("ctaSubtitle")}
            </p>
            <Link
              href="/tours"
              locale={locale as any}
              className="inline-flex h-16 items-center px-10 bg-white text-green-600 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-xl"
            >
              {commonT("exploreAll")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
