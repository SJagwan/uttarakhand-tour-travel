"use client";

import { useActionState, useState } from "react";
import { submitBooking, BookingState } from "@/app/actions/booking";
import { Phone, Users, Calendar, Send, Loader2, CheckCircle, AlertTriangle } from "lucide-react";

interface Props {
  tourId: string;
  tourTitle: string;
  basePrice: number;
}

const initialState: BookingState = {};

/**
 * PRODUCTION BOOKING WIDGET (CLIENT COMPONENT)
 * React 19 Form Actions. Handles validation and loading state with useActionState.
 */
export default function BookingWidget({ tourId, tourTitle, basePrice }: Props) {
  // REACT 19: useActionState provides current state, action, and pending status
  const [state, formAction, isPending] = useActionState(submitBooking, initialState);
  const [travelers, setTravelers] = useState(1);

  const totalPrice = basePrice * travelers;

  if (state.success) {
    return (
      <div className="bg-white p-10 rounded-3xl shadow-2xl border border-green-100 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
        <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">
          Enquiry <span className="text-green-600">Sent!</span>
        </h3>
        <p className="text-slate-600 leading-relaxed font-medium">
          {state.message}
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-8 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-green-600 transition-all shadow-xl"
        >
          Close & Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden ring-1 ring-slate-100 ring-inset">
      {/* Dynamic Price Header */}
      <div className="bg-slate-900 p-8 text-white relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-5 translate-x-4 group-hover:translate-x-0 transition-transform">
          <Send size={120} />
        </div>
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2 leading-none">Starting total</p>
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-black tracking-tighter italic">₹{totalPrice.toLocaleString("en-IN")}</span>
          <span className="text-slate-400 text-xs font-bold uppercase">/ {travelers} Persons</span>
        </div>
      </div>

      <form action={formAction} className="p-8 space-y-6">
        <input type="hidden" name="destination" value={tourTitle} />

        {/* Input: Name */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
            Your Full Name
          </label>
          <input
            name="name"
            type="text"
            placeholder="e.g. Rahul Sharma"
            required
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition font-medium text-slate-900"
          />
          {state.errors?.name && <p className="text-[10px] text-red-500 font-black uppercase tracking-tight">{state.errors.name[0]}</p>}
        </div>

        {/* Input: Phone */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <Phone size={12} className="text-green-600" /> Phone Number
          </label>
          <input
            name="phone"
            type="tel"
            placeholder="98XXXXXXXX"
            required
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition font-medium text-slate-900"
          />
          {state.errors?.phone && <p className="text-[10px] text-red-500 font-black uppercase tracking-tight">{state.errors.phone[0]}</p>}
        </div>

        <div className="grid grid-cols-2 gap-5">
          {/* Input: Passengers */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Users size={12} className="text-green-600" /> Persons
            </label>
            <input
              name="passengers"
              type="number"
              min="1"
              max="25"
              value={travelers}
              onChange={(e) => setTravelers(Number(e.target.value))}
              required
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition font-medium text-slate-900"
            />
          </div>

          {/* Input: Date */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Calendar size={12} className="text-green-600" /> Select Date
            </label>
            <input
              name="date"
              type="date"
              min={new Date(Date.now() + 86400000).toISOString().split("T")[0]}
              required
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition font-medium text-slate-900 uppercase text-xs"
            />
          </div>
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
              <Loader2 className="w-5 h-5 animate-spin" /> Processing
            </>
          ) : (
            <>
              Request Price Quote <Send size={16} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>

        <p className="text-[10px] text-center text-slate-400 font-black uppercase tracking-[0.15em] leading-tight">
          Safe & Secure Booking <br />
          No immediate payment required
        </p>
      </form>
    </div>
  );
}
