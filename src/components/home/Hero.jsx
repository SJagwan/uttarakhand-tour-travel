import React from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      className="bg-cover bg-center h-[80vh] flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('/uttarakhand-hero.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-xl max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold">{t("hero.heading")}</h2>
        <p className="mt-4 text-lg">{t("hero.subheading")}</p>

        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <a
            href="#booking"
            className="bg-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            {t("hero.bookNow")}
          </a>
          <a
            href={`tel:${t("hero.phone")}`}
            className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            {t("hero.callUs")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
