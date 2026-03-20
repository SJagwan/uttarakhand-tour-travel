import BookingWidget from "@/components/sections/BookingWidget";
import { Mail, MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contactPage" });

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic">
              {t("heading").split(" ").slice(0, 2).join(" ")}{" "}
              <span className="text-green-600">
                {t("heading").split(" ").slice(2).join(" ")}
              </span>
            </h1>
            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-12 max-w-lg">
              {t("subheading")}
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                    {t("emailLabel")}
                  </p>
                  <a
                    href="mailto:jagwan1997@gmail.com"
                    className="text-xl font-black text-slate-900"
                  >
                    jagwan1997@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                    {t("visitLabel")}
                  </p>
                  <p className="text-xl font-black text-slate-900 leading-tight">
                    {t("address")}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full h-64 md:h-80 bg-slate-100 rounded-[32px] overflow-hidden shadow-inner border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5310.5641962023665!2d77.8953157!3d30.302877399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ed527ca574be5%3A0x522318dfc7fdf80b!2sJagwan%20Tour%20and%20Travels!5e1!3m2!1sen!2sin!4v1774024696800!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jagwan Tour and Travels Location"
              ></iframe>
            </div>
          </div>

          <div>
            <BookingWidget
              tourId="general-enquiry"
              tourTitle={locale === "hi" ? "सामान्य पूछताछ" : "General Enquiry"}
              basePrice={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
