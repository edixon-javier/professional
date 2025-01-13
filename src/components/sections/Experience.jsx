import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  const renderTags = (tags) =>
    tags.map((tag, index) => (
      <span
        key={index}
        className="text-green-600 dark:text-green-400 border border-green-600 dark:border-green-400 rounded-full py-1 px-3 hover:bg-green-600 hover:text-white dark:hover:bg-green-400 dark:hover:text-gray-900 transition duration-300"
      >
        {tag}
      </span>
    ));

  return (
    <section
      className="min-h-screen flex items-center justify-center transition-colors duration-300 px-4"
      id="experience"
    >
      <div className="container w-full max-w-4xl text-gray-800 dark:text-gray-50">
        <h2 className="text-2xl text-start sm:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          {t("experience.title")}
        </h2>

        <div className="relative border-l-2 border-green-400 ml-4">
          {/* Freelancer Experience */}
          <div className="ml-6 mb-12">
            <div className="absolute -left-3.5 mt-1 w-6 h-6 bg-green-400 rounded-full border-4 border-gray-900"></div>
            <h3 className="text-gray-800 dark:text-gray-50 font-semibold text-lg mb-1">
              {t("experience.freelancer.role")} |{" "}
              <span className="text-amber-400">
                {t("experience.freelancer.company")}
              </span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {t("experience.freelancer.date")}
            </p>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              {t("experience.freelancer.description")}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {renderTags(
                t("experience.freelancerTags", { returnObjects: true })
              )}
            </div>
          </div>

          {/* AsisVisa Experience */}
          <div className="ml-6 mb-12">
            <div className="absolute -left-3.5 mt-1 w-6 h-6 bg-green-400 rounded-full border-4 border-gray-900"></div>
            <h3 className="text-gray-800 dark:text-gray-50 font-semibold text-lg mb-1">
              {t("experience.asisvisa.role")} |{" "}
              <a
                href="https://asisvisa.com/"
                className="text-amber-400 hover:text-amber-300 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("experience.asisvisa.company")}
              </a>
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {t("experience.asisvisa.date")}
            </p>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              {t("experience.asisvisa.description")}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {renderTags(
                t("experience.asisvisaTags", { returnObjects: true })
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
