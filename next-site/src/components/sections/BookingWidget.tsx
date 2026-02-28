"use client";

import { useActionState, useState } from "react";
import { submitBooking, BookingState } from "@/app/actions/booking";
import { Phone, Users, Calendar, Send, Loader2, CheckCircle, AlertTriangle, MapPin, FileText, User } from "lucide-react";
import { useTranslations } from "next-intl";

interface Props {
  tourId: string;
  tourTitle: string;
  basePrice: number;
}

const initialState: BookingState = {};

export default function BookingWidget({ tourId, tourTitle, basePrice }: Props) {
  const [state, formAction, isPending] = useActionState(submitBooking, initialState);
  const [travelers, setTravelers] = useState(1);
  const t = useTranslations("booking");

  const totalPrice = basePrice * travelers;

  if (state.success) {
    return (
      <div className="bg-white p-10 rounded-3xl shadow-2xl border border-green-100 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
        <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">
          {t("successTitle").split(" ")[0]} <span className="text-green-600">{t("successTitle").split(" ").slice(1).join(" ")}</span>
        </h3>
        <p className="text-slate-600 leading-relaxed font-medium">
          {state.message || t("successMessage")}
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-8 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-green-600 transition-all shadow-xl"
        >
          {t("closeButton")}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden ring-1 ring-slate-100 ring-inset">
      <form action={formAction} className="p-8 space-y-6">
        
        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <User size={12} className="text-green-600" /> {t("nameLabel")}
          </label>
          <input
            name="name"
            type="text"
            placeholder={t("namePlaceholder")}
            required
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition font-medium text-slate-900"
          />
          {state.errors?.name && <p className="text-[10px] text-red-500 font-black uppercase tracking-tight">{state.errors.name[0]}</p>}
        </div>

        {/* Phone Number */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <Phone size={12} className="text-green-600" /> {t("phoneLabel")}
          </label>
          <input
            name="phone"
            type="tel"
            placeholder={t("phonePlaceholder")}
            required
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition font-medium text-slate-900"
          />
          {state.errors?.phone && <p className="text-[10px] text-red-500 font-black uppercase tracking-tight">{state.errors.phone[0]}</p>}
        </div>

        {/* Destination */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <MapPin size={12} className="text-green-600" /> {t("destinationLabel")}
          </label>
          <input
            name="destination"
            type="text"
            defaultValue={tourTitle !== "General Enquiry" ? tourTitle : ""}
            placeholder={t("destinationPlaceholder")}
            readOnly={tourTitle !== "General Enquiry"}
            required
            className={`w-full px-5 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition font-medium ${
              tourTitle !== "General Enquiry"
                ? "bg-slate-100 text-slate-500 cursor-not-allowed"
                : "bg-slate-50 text-slate-900"
            }`}
          />
          {state.errors?.destination && <p className="text-[10px] text-red-500 font-black uppercase tracking-tight">{state.errors.destination[0]}</p>}
        </div>

        {/* Pickup Location */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <MapPin size={12} className="text-green-600" /> {t("pickupLabel")}
          </label>
          <input
            name="pickup"
            type="text"
            placeholder={t("pickupPlaceholder")}
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition font-medium text-slate-900"
          />
        </div>

        <div className="grid grid-cols-2 gap-5">
          {/* No. of Persons */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Users size={12} className="text-green-600" /> {t("passengersLabel")}
            </label>
            <input
              name="passengers"
              type="number"
              min="1"
              max="25"
              placeholder={t("passengersPlaceholder")}
              value={travelers}
              onChange={(e) => setTravelers(e.target.value ? Number(e.target.value) : ("" as any))}
              required
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition font-medium text-slate-900"
            />
            {state.errors?.passengers && <p className="text-[10px] text-red-500 font-black uppercase tracking-tight">{state.errors.passengers[0]}</p>}
          </div>

          {/* Travel Date */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Calendar size={12} className="text-green-600" /> {t("dateLabel")}
            </label>
            <input
              name="date"
              type="date"
              min={new Date(Date.now() + 86400000).toISOString().split("T")[0]}
              required
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition font-medium text-slate-900 uppercase text-xs"
            />
            {state.errors?.date && <p className="text-[10px] text-red-500 font-black uppercase tracking-tight">{state.errors.date[0]}</p>}
          </div>
        </div>

        {/* Additional Requirements */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <FileText size={12} className="text-green-600" /> {t("messageLabel")}
          </label>
          <textarea
            name="message"
            placeholder={t("messagePlaceholder")}
            rows={3}
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition font-medium text-slate-900 resize-none"
          />
        </div>

        {state.message && !state.success && (
          <div className="flex items-center gap-2 p-4 bg-red-50 text-red-600 text-xs font-black uppercase rounded-2xl animate-shake">
            <AlertTriangle size={16} />
            <span>{state.message}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="group w-full py-5 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-black uppercase italic tracking-widest transition-all shadow-xl hover:shadow-green-600/30 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-1"
        >
          {isPending ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" /> {t("processing")}
            </>
          ) : (
            <>
              {t("submitButton")} <Send size={16} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>

        <p className="text-[10px] text-center text-slate-400 font-black uppercase tracking-[0.15em] leading-tight">
          {t("secureText1")} <br />
          {t("secureText2")}
        </p>
      </form>
    </div>
  );
}
