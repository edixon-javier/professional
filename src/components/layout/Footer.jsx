import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="text-center p-4">
      <p className="text-gray-800 dark:text-gray-100">
        &copy; {new Date().getFullYear()} {t("footer.copyright")}.
      </p>
    </footer>
  );
};

export default Footer;
