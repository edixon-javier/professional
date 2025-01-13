import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      className="min-h-screen grid justify-center content-center transition-colors duration-300 py-6 px-4 sm:px-6 lg:px-8"
      id="about"
    >
      <div className="w-full max-w-4xl flex flex-col pr-4">
        <h2 className="text-2xl text-start sm:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          {t("about.title")}
        </h2>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
          {t("about.paragraph1")}
        </p>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
          {t("about.paragraph2")}
        </p>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
          {t("about.paragraph3")}
        </p>
      </div>
    </section>
  );
};

export default About;
