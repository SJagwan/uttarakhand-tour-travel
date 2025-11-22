import React from "react";
import { X, Calendar, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const DestinationModal = ({ destination, onClose, onBook }) => {
  const { t } = useTranslation();

  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden relative animate-zoom-in">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Header */}
        <div className="h-64 relative">
          <img
            src={destination.img}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h2 className="text-3xl font-bold text-white mb-1">{destination.name}</h2>
            <p className="text-green-300 font-medium">{destination.tagline}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              {destination.description}
            </p>
          </div>

          <div className="flex items-start gap-3 bg-green-50 p-4 rounded-xl mb-8 border border-green-100">
            <Calendar className="w-5 h-5 text-green-600 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">
                {t("destinations.modal.bestTime")}
              </h4>
              <p className="text-gray-600 text-sm">
                {destination.bestTime}
              </p>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              onClick={() => onBook(destination.name)}
              className="bg-green-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-700 transition shadow-lg hover:shadow-green-500/30 flex items-center gap-2 cursor-pointer"
            >
              {t("destinations.modal.bookTrip")}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationModal;
