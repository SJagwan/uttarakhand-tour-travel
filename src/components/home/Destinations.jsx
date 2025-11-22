import React from "react";
import { useTranslation } from "react-i18next";
import { MapPin, ArrowRight } from "lucide-react";

const Destinations = () => {
  const { t } = useTranslation();
  const places = t("destinations.places", { returnObjects: true });
  const destinationList = Array.isArray(places) ? places : [];

  return (
    <section id="destinations" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            {t("destinations.title")}
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinationList.map((p, i) => (
            <div
              key={i}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
            >
              {/* Image with Zoom Effect */}
              <img
                src={p.img}
                alt={`${p.name} destination`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 text-green-400 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium uppercase tracking-wider">
                    Explore
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-1">
                  {p.name}
                </h3>
                
                <p className="text-gray-300 font-medium text-sm mb-4">
                  {p.tagline}
                </p>

                <button className="flex items-center gap-2 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 hover:text-green-400">
                  View Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
