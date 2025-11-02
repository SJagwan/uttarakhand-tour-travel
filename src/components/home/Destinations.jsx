import { useTranslation } from "react-i18next";

const Destinations = () => {
  const { t } = useTranslation();

  // Get destination list safely from translations
  const places = t("destinations.places", { returnObjects: true });
  const destinationList = Array.isArray(places) ? places : [];

  return (
    <section id="destinations" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">{t("destinations.title")}</h2>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {destinationList.map((p, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition"
          >
            <img
              src={p.img}
              alt={`${p.name} destination`}
              className="w-full h-40 object-cover"
              loading="lazy"
            />
            <div className="p-4 font-semibold">{p.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
