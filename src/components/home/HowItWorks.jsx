import React from "react";
import { useTranslation } from "react-i18next";
import { Send, Map, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <Send className="w-8 h-8 text-green-600" />,
      title: t("howItWorks.steps.step1.title"),
      description: t("howItWorks.steps.step1.description"),
    },
    {
      icon: <Map className="w-8 h-8 text-green-600" />,
      title: t("howItWorks.steps.step2.title"),
      description: t("howItWorks.steps.step2.description"),
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: t("howItWorks.steps.step3.title"),
      description: t("howItWorks.steps.step3.description"),
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("howItWorks.heading")}
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-green-200 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 border-4 border-green-50 group-hover:border-green-100 transition-colors duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
