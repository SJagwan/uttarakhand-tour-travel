"use client";

import { useActionState, useState } from "react";
import { submitBooking, BookingState } from "@/app/actions/booking";
import { Phone, Users, Calendar, MapPin, MessageSquare, Send, Loader2, CheckCircle, Car } from "lucide-react";
import { useTranslations } from "next-intl";

const initialState: BookingState = {};

/**
 * PRODUCTION HOME BOOKING SECTION
 * Captures custom itinerary leads. Uses React 19 Server Actions.
 */
export default function HomeBookingSection() {
  const [state, formAction, isPending] = useActionState(submitBooking, initialState);
  const t = useTranslations("homeBooking");
  const common = useTranslations("common");
  const b = useTranslations("booking");

  if (state.success) {
    return (
      <section id="book-now" className="py-24 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-[40px] p-12 text-center shadow-2xl">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">{common("requestReceived")}</h2>
            <p className="text-slate-600 text-lg font-medium leading-relaxed">
              {state.message || b("successMessage")}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book-now" className="py-24 bg-slate-900 overflow-hidden relative">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-600/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Content */}
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
              {t("heading").split(" ").slice(0, 2).join(" ")} <br />
              <span className="text-green-500 not-italic">{t("heading").split(" ").slice(2).join(" ")}</span>
            </h2>
            <p className="text-slate-400 text-xl font-medium leading-relaxed mb-12 max-w-md">
              {t("subheading")}
            </p>
            
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-green-500 border border-white/10">
                  <Car size={20} />
                </div>
                <span className="text-white font-bold uppercase tracking-widest text-xs">{t("privateFleet")}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-green-500 border border-white/10">
                  <Users size={20} />
                </div>
                <span className="text-white font-bold uppercase tracking-widest text-xs">{t("localExperts")}</span>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl animate-in fade-in slide-in-from-right-8 duration-1000">
            <form action={formAction} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{b("nameLabel")}</label>
                  <input
                    name="name"
                    type="text"
                    placeholder={b("namePlaceholder")}
                    required
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition font-medium text-slate-900"
                  />
                </div>
                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{b("phoneLabel")}</label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder={b("phonePlaceholder")}
                    required
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition font-medium text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Destination */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{b("destinationLabel")}</label>
                  <div className="relative">
                    <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input
                      name="destination"
                      type="text"
                      placeholder={b("destinationPlaceholder")}
                      required
                      className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition font-medium text-slate-900"
                    />
                  </div>
                </div>
                {/* Persons */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{b("passengersLabel")}</label>
                  <div className="relative">
                    <Users className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input
                      name="passengers"
                      type="number"
                      min="1"
                      placeholder={b("passengersPlaceholder")}
                      required
                      className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition font-medium text-slate-900"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{b("dateLabel")}</label>
                  <div className="relative">
                    <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input
                      name="date"
                      type="date"
                      required
                      className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition font-medium uppercase text-xs text-slate-900"
                    />
                  </div>
                </div>
                {/* Pickup */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{b("pickupLabel")}</label>
                  <input
                    name="pickup"
                    type="text"
                    placeholder={b("pickupPlaceholder")}
                    required
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition font-medium text-slate-900"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{b("messageLabel")}</label>
                <div className="relative">
                  <MessageSquare className="absolute left-5 top-5 text-slate-300" size={18} />
                  <textarea
                    name="message"
                    rows={3}
                    placeholder={b("messagePlaceholder")}
                    className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition font-medium resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full py-5 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-black uppercase italic tracking-widest transition-all shadow-xl hover:shadow-green-600/30 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> {common("processing")}
                  </>
                ) : (
                  <>
                    {common("getFreeQuote")} <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
