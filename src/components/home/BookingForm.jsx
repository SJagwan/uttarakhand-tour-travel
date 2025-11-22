import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const BookingForm = () => {
  const { t } = useTranslation();
  
  // --- CONFIGURATION START ---
  // REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyY0U4qhVV2AY-Cw9wSBbRa6_fUmousDqtVDOv1uJc1P3WShkzik_XlVnd40-8CtCnT/exec"; 
  // --- CONFIGURATION END ---


  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    passengers: "",
    destination: "",
    date: "",
    pickup: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {

    const lastSubmission = localStorage.getItem("lastBookingSubmission");
    if (lastSubmission) {
      const hoursPassed = (Date.now() - parseInt(lastSubmission)) / (1000 * 60 * 60);
      if (hoursPassed < 12) {
        setStatus("spam_blocked");
      }
    }

    // Listen for pre-fill event from Destinations
    const handlePrefill = (e) => {
      setFormData((prev) => ({ ...prev, destination: e.detail }));
    };

    window.addEventListener("prefillDestination", handlePrefill);
    return () => window.removeEventListener("prefillDestination", handlePrefill);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (status === "spam_blocked") return;

    setStatus("submitting");

    try {
      // Send data as JSON to Google Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        // mode: "no-cors" is NOT needed here because Apps Script handles CORS!
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // On success
        setStatus("success");
        localStorage.setItem("lastBookingSubmission", Date.now().toString());
        setFormData({ name: "", phone: "", passengers: "", destination: "", date: "", pickup: "", message: "" });
      } else {
        throw new Error("Network response was not ok");
      }
      
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try calling us directly.");
    }
  };

  if (status === "spam_blocked") {
    return (
      <section id="booking" className="py-16 text-center bg-gray-50">
        <div className="max-w-lg mx-auto px-6">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 shadow-sm">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{t("booking.spamTitle")}</h2>
            <p className="text-gray-600 mb-6">
              {t("booking.spamMessage")}
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (status === "success") {
    return (
      <section id="booking" className="py-16 text-center bg-gray-50">
        <div className="max-w-lg mx-auto px-6">
          <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-lg animate-fade-in-up">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{t("booking.successTitle")}</h2>
            <p className="text-gray-600 mb-6">
              {t("booking.successMessage")}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-16 text-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-4">{t("booking.title")}</h2>
      <p className="text-gray-600 mb-10 max-w-xl mx-auto">
        {t("booking.subtitle")}
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto grid gap-4 px-6"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder={t("booking.namePlaceholder")}
            required
            className="p-4 border border-gray-200 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            placeholder={t("booking.phonePlaceholder")}
            required
            className="p-4 border border-gray-200 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="passengers"
            value={formData.passengers}
            onChange={handleChange}
            type="number"
            min="4"
            max="23"
            placeholder={t("booking.passengersPlaceholder")}
            required
            className="p-4 border border-gray-200 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
          <input
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            type="text"
            placeholder={t("booking.destinationPlaceholder")}
            required
            className="p-4 border border-gray-200 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="date"
            value={formData.date}
            onChange={handleChange}
            type="date"
            min={new Date(Date.now() + 86400000).toISOString().split("T")[0]}
            required
            className="p-4 border border-gray-200 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition text-gray-500"
          />
          <input
            name="pickup"
            value={formData.pickup}
            onChange={handleChange}
            type="text"
            placeholder={t("booking.pickupPlaceholder")}
            required
            className="p-4 border border-gray-200 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t("booking.messagePlaceholder")}
          rows={4}
          className="p-4 border border-gray-200 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition resize-none"
        />

        {status === "error" && (
          <div className="flex items-center justify-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
            <AlertCircle className="w-5 h-5" />
            <span>{errorMessage}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-green-600 text-white px-6 py-4 rounded-xl hover:bg-green-700 transition font-bold text-lg shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              {t("booking.submitButton")}
              <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
