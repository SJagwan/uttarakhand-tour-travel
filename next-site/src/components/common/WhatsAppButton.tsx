"use client";

import { Phone } from "lucide-react";

export default function WhatsAppButton() {
  const WHATSAPP_NUMBER = "916395561049";
  const message = encodeURIComponent("Hello! I am interested in booking a tour with Uttarakhand Tour & Travels.");
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce hover:animate-none"
      aria-label="Contact us on WhatsApp"
    >
      <Phone size={28} />
    </a>
  );
}
