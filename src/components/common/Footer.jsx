import { useTranslation } from "react-i18next";
import { Mail, MapPin, Facebook, Instagram, Twitter, User } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-12 mt-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        {/* Column 1: Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">{t("navbar.logo")}</h2>
          <p className="text-gray-400 leading-relaxed">
            {t("footer.about")}
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-green-500 transition"><Facebook className="w-6 h-6" /></a>
            <a href="#" className="hover:text-green-500 transition"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="hover:text-green-500 transition"><Twitter className="w-6 h-6" /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">{t("footer.quickLinks")}</h3>
          <ul className="space-y-3">
            <li><a href="#destinations" className="hover:text-green-500 transition">{t("navbar.links.destinations")}</a></li>
            <li><a href="#booking" className="hover:text-green-500 transition">{t("navbar.links.booking")}</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">{t("footer.contactUs")}</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <User className="w-5 h-5 text-green-500" />
              <span className="font-medium">{t("footer.contactName")}</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-green-500 mt-1" />
              <span>{t("footer.address")}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-green-500" />
              <a href={`mailto:${t("footer.email")}`} className="hover:text-green-500 transition">
                {t("footer.email")}
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} {t("footer.copyright")}
      </div>
    </footer>
  );
};

export default Footer;
