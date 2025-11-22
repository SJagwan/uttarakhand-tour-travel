import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Phone, Calendar } from "lucide-react";

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
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Ken Burns Effect */}
      {heroImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === bgIndex ? "opacity-100 animate-zoom-in" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${img}')` }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl w-full text-center">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 p-8 md:p-12 rounded-2xl shadow-2xl animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg tracking-tight">
            {t("hero.heading")}
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-100 mb-8 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            {t("hero.subheading")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#booking"
              className="group flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-green-500/30"
            >
              <Calendar className="w-5 h-5" />
              {t("hero.bookNow")}
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-8 text-white/90 text-sm font-medium">
          
            <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <Phone className="w-4 h-4 text-green-400" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
