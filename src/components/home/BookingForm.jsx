import React from "react";
import { useTranslation } from "react-i18next";

const BookingForm = () => {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle form submission logic here
  };

  return (
    <section id="booking" className="py-16 text-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-10">{t("booking.title")}</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto grid gap-4 px-6"
      >
        <div>
          <label htmlFor="name" className="sr-only">
            {t("booking.namePlaceholder")}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder={t("booking.namePlaceholder")}
            required
            className="p-3 border rounded-lg w-full"
          />
        </div>

        <div>
          <label htmlFor="phone" className="sr-only">
            {t("booking.phonePlaceholder")}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder={t("booking.phonePlaceholder")}
            required
            className="p-3 border rounded-lg w-full"
          />
        </div>

        <div>
          <label htmlFor="date" className="sr-only">
            {t("booking.datePlaceholder")}
          </label>
          <input
            id="date"
            name="date"
            type="date"
            className="p-3 border rounded-lg w-full"
          />
        </div>

        <div>
          <label htmlFor="pickup" className="sr-only">
            {t("booking.pickupPlaceholder")}
          </label>
          <input
            id="pickup"
            name="pickup"
            type="text"
            placeholder={t("booking.pickupPlaceholder")}
            className="p-3 border rounded-lg w-full"
          />
        </div>

        <div>
          <label htmlFor="message" className="sr-only">
            {t("booking.messagePlaceholder")}
          </label>
          <textarea
            id="message"
            name="message"
            placeholder={t("booking.messagePlaceholder")}
            rows={3}
            className="p-3 border rounded-lg w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          {t("booking.submitButton")}
        </button>
      </form>

      <p className="mt-6 text-gray-600">
        {t("booking.orCall")}{" "}
        <a
          href={`tel:${t("booking.phone")}`}
          className="text-green-700 font-semibold"
        >
          {t("booking.phone")}
        </a>
      </p>
    </section>
  );
};

export default BookingForm;
