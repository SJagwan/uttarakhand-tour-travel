import { Link } from "@/i18n/routing";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function Footer({ locale }: { locale: string }) {
  const currentYear = new Date().getFullYear();
  const t = await getTranslations({ locale, namespace: "footer" });
  const nav = await getTranslations({ locale, namespace: "navbar" });

  return (
    <footer className="bg-slate-900 text-slate-100 py-24 border-t border-slate-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* BRAND */}
        <div className="space-y-6">
          <Link href="/" locale={locale as any} className="flex flex-col group">
            <span className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase italic group-hover:text-green-600 transition-colors leading-none">
              Uttarakhand <br />
              <span className="text-green-600 group-hover:text-white not-italic">
                Tour & Travels
              </span>
            </span>
          </Link>
          <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xs">
            {t("about")}
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 bg-slate-800 rounded-2xl hover:bg-green-600 transition-colors"
            >
              <Instagram size={18} className="text-white" />
            </a>
            <a
              href="#"
              className="p-3 bg-slate-800 rounded-2xl hover:bg-green-600 transition-colors"
            >
              <Facebook size={18} className="text-white" />
            </a>
            <a
              href="#"
              className="p-3 bg-slate-800 rounded-2xl hover:bg-green-600 transition-colors"
            >
              <Youtube size={18} className="text-white" />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="space-y-8">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-green-600 italic">
            {t("quickLinks")}
          </h3>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-slate-400">
            <li>
              <Link href="/tours" locale={locale as any} className="hover:text-white transition-colors">
                All Packages
              </Link>
            </li>
            <li>
              <Link
                href="/destinations"
                locale={locale as any}
                className="hover:text-white transition-colors"
              >
                {nav("links.destinations")}
              </Link>
            </li>
            <li>
              <Link href="/about" locale={locale as any} className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                locale={locale as any}
                className="hover:text-white transition-colors"
              >
                {t("contactUs")}
              </Link>
            </li>
          </ul>
        </div>

        {/* TOP DESTINATIONS */}
        <div className="space-y-8">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-green-600 italic">
            {nav("links.destinations")}
          </h3>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-slate-400">
            <li>
              <Link
                href="/destinations/kedarnath"
                locale={locale as any}
                className="hover:text-white transition-colors"
              >
                Kedarnath
              </Link>
            </li>
            <li>
              <Link
                href="/destinations/badrinath"
                locale={locale as any}
                className="hover:text-white transition-colors"
              >
                Badrinath
              </Link>
            </li>
            <li>
              <Link
                href="/destinations/mussoorie"
                locale={locale as any}
                className="hover:text-white transition-colors"
              >
                Mussoorie
              </Link>
            </li>
            <li>
              <Link
                href="/destinations/nainital"
                locale={locale as any}
                className="hover:text-white transition-colors"
              >
                Nainital
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="space-y-8">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-green-600 italic">
            {t("contactUs")}
          </h3>
          <ul className="space-y-6">
            <li className="flex gap-4 items-start">
              <MapPin size={20} className="text-green-600 shrink-0" />
              <p className="text-sm font-medium text-slate-400 leading-relaxed">
                {t("address")}
              </p>
            </li>
            <li className="flex gap-4 items-center">
              <Mail size={20} className="text-green-600 shrink-0" />
              <a
                href={`mailto:${t("email")}`}
                className="text-sm font-bold text-slate-400 hover:text-white transition-colors tracking-tight"
              >
                {t("email")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-20 pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p
          className="text-[10px] font-black uppercase tracking-widest text-slate-500"
          suppressHydrationWarning
        >
          © {currentYear} {t("copyright")}
        </p>
        <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-slate-500">
          <Link href="/privacy" locale={locale as any} className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" locale={locale as any} className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
