import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// List of hero images (use your best Uttarakhand images from public folder)
const heroImages = [
  "/uttarakhand-hero.jpg",
  "/destinations/kedarnath.jpg",
  "/destinations/badrinath.jpg",
  "/destinations/mussoorie.jpg",
  "/destinations/nainital.jpg",
];

const Hero = () => {
  const { t } = useTranslation();

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-center text-white transition-all duration-1000"
      style={{ backgroundImage: `url('${heroImages[bgIndex]}')` }}
    >
      {/* Overlay for smooth fade effect */}
      <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-1000" />
      <div className="relative z-10 p-8 rounded-2xl max-w-2xl w-full flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          {t("hero.heading")}
        </h2>
        <p className="mt-2 text-lg md:text-xl font-medium drop-shadow mb-4">
          {t("hero.subheading")}
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-4">
          <a
            href="#booking"
            className="bg-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition text-lg shadow"
          >
            {t("hero.bookNow")}
          </a>
          <a
            href={`tel:${t("hero.phone")}`}
            className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition text-lg shadow"
          >
            {t("hero.callUs")}
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center text-sm md:text-base opacity-90">
          <span className="bg-white/80 text-green-700 px-4 py-1 rounded-full font-semibold shadow">
            {t("hero.trustedBy")}
          </span>
          <span className="bg-white/80 text-green-700 px-4 py-1 rounded-full font-semibold shadow">
            {t("hero.support")}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
