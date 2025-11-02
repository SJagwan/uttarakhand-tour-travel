import React from "react";
import { Bus, Wallet, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

// Map icon names to actual Lucide components
const iconMap = {
  Bus: <Bus className="w-10 h-10 text-green-600" />,
  Users: <Users className="w-10 h-10 text-green-600" />,
  Wallet: <Wallet className="w-10 h-10 text-green-600" />,
};

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const featureKeys = ["feature1", "feature2", "feature3"];

  const features = featureKeys.map((key) => ({
    icon: t(`whyChooseUs.features.${key}.icon`),
    title: t(`whyChooseUs.features.${key}.title`),
    description: t(`whyChooseUs.features.${key}.description`),
  }));

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("whyChooseUs.heading")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const iconElement = iconMap[feature.icon] || (
              <Bus className="w-10 h-10 text-gray-400" />
            );

            return (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-4">{iconElement}</div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
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
