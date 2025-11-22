import React from "react";
import { Bus, Wallet, Users, ShieldCheck, Clock, Map } from "lucide-react";
import { useTranslation } from "react-i18next";

// Extended icon map for more variety if needed
const iconMap = {
  Bus: <Bus className="w-8 h-8 text-green-600" />,
  Users: <Users className="w-8 h-8 text-green-600" />,
  Wallet: <Wallet className="w-8 h-8 text-green-600" />,
  Shield: <ShieldCheck className="w-8 h-8 text-green-600" />,
  Clock: <Clock className="w-8 h-8 text-green-600" />,
  Map: <Map className="w-8 h-8 text-green-600" />,
};

const WhyChooseUs = () => {
  const { t } = useTranslation();
  const featuresObj = t("whyChooseUs.features", { returnObjects: true });
  const features = Object.values(featuresObj);

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            {t("whyChooseUs.heading")}
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || iconMap.Bus;

            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                  {React.cloneElement(IconComponent, {
                    className: "w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300",
                  })}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
