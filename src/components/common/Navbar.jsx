import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageModal from "./LanguageModal";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [showLangModal, setShowLangModal] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang: currentLang } = useParams();

  const switchLanguage = (lang) => {
    if (lang !== currentLang) {
      navigate(`/${lang}`);
    }
    i18n.changeLanguage(lang);
    localStorage.setItem("selectedLang", lang);
    setLangOpen(false);
    setShowLangModal(false);
  };

  useEffect(() => {
    // Only show modal if no language is set in localStorage
    const storedLang = localStorage.getItem("selectedLang");
    if (!storedLang) {
      setShowLangModal(true);
    }
  }, []);

  return (
    <>
      <LanguageModal open={showLangModal} onSelect={switchLanguage} />
      <nav className="w-full bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-xl font-bold text-green-700">
            {t("navbar.logo")}
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6 font-medium text-gray-700">
            <a href="#destinations" className="hover:text-green-700">
              {t("navbar.links.destinations")}
            </a>
            <a href="#booking" className="hover:text-green-700">
              {t("navbar.links.booking")}
            </a>
            <a href="#contact" className="hover:text-green-700">
              {t("navbar.links.contact")}
            </a>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="px-3 py-1 border rounded hover:bg-gray-100 cursor-pointer"
              >
                Language / भाषा
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-1 bg-white border rounded shadow z-50">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => switchLanguage(lang.code)}
                      className="block w-full text-left px-4 py-2 hover:text-green-700 cursor-pointer"
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <a
            href={`tel:${t("navbar.links.phone")}`}
            className="hidden md:inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            {t("navbar.links.callNow")}
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-green-700"
            onClick={() => setOpen(!open)}
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {open && (
          <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-lg">
            <a
              href="#destinations"
              className="block text-gray-700 hover:text-green-700"
            >
              {t("navbar.links.destinations")}
            </a>
            <a
              href="#booking"
              className="block text-gray-700 hover:text-green-700"
            >
              {t("navbar.links.booking")}
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-green-700"
            >
              {t("navbar.links.contact")}
            </a>
            <a
              href={`tel:${t("navbar.links.phone")}`}
              className="block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-center"
            >
              {t("navbar.links.callNow")}
            </a>

            {/* Mobile Language Selector */}
            <div className="mt-4">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => switchLanguage(lang.code)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
