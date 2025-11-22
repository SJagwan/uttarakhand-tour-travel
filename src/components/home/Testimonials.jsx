import React from "react";
import { useTranslation } from "react-i18next";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const { t } = useTranslation();
  const reviews = t("testimonials.reviews", { returnObjects: true });
  const reviewList = Array.isArray(reviews) ? reviews : [];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("testimonials.heading")}
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviewList.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 relative"
            >
              <Quote className="w-10 h-10 text-green-200 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
