import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-gray-800 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>
          &copy; {new Date().getFullYear()} {t("footer.copyright")}
        </p>
        <p>
          📞{" "}
          <a href={`tel:${t("footer.phone")}`} className="text-green-400">
            {t("footer.phone")}
          </a>{" "}
          - {t("footer.callText")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
