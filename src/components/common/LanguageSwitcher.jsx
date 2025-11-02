import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex justify-end gap-2 p-4">
      <button
        className={`px-3 py-1 rounded ${
          i18n.language === "en" ? "bg-green-600 text-white" : "bg-gray-200"
        }`}
        onClick={() => i18n.changeLanguage("en")}
      >
        EN
      </button>
      <button
        className={`px-3 py-1 rounded ${
          i18n.language === "hi" ? "bg-green-600 text-white" : "bg-gray-200"
        }`}
        onClick={() => i18n.changeLanguage("hi")}
      >
        हि
      </button>
    </div>
  );
};

export default LanguageSwitcher;
