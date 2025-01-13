import { useTranslation } from "react-i18next";
import levelUp from "../../assets/images/levelup.webp";
import technical from "../../assets/images/technical.webp";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section
      className="min-h-screen flex items-center justify-center transition-colors duration-300 px-4"
      id="projects"
    >
      <div className="container w-full max-w-4xl text-gray-800 dark:text-gray-50">
        <h2 className="text-2xl text-start sm:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
          {t("projects.header")}
        </h2>

        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-4 md:mb-0 relative group">
            <a
              href="https://github.com/edixon-javier/LevelUp"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden rounded-lg"
            >
              <img
                height={"auto"}
                width={"auto"}
                src={levelUp}
                alt={t("projects.levelup.title")}
                className="rounded-md transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-md flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {t("projects.levelup.title")}
                  </h3>
                  <i className="fas fa-arrow-right text-white text-2xl"></i>
                </div>
              </div>
            </a>
          </div>

          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-green-400 font-medium mb-2">
              {t("projects.featured")}
            </h3>
            <h4 className="text-gray-800 dark:text-gray-50 font-semibold text-lg mb-3">
              {t("projects.levelup.title")}
            </h4>
            <p className="text-gray-400 leading-relaxed mb-4 text-sm md:text-base">
              {t("projects.levelup.description")}
            </p>
            <p className="text-gray-400 text-sm">
              {t("projects.levelup.technologies")}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-4 md:mb-0 relative group">
            <a
              href="https://github.com/edixon-javier/technicalTest"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden rounded-lg"
            >
              <img
                src={technical}
                height={"auto"}
                width={"auto"}
                alt={t("projects.technical.title")}
                className="rounded-md transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-md flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {t("projects.technical.title")}
                  </h3>
                  <i className="fas fa-arrow-right text-white text-2xl"></i>
                </div>
              </div>
            </a>
          </div>
          <div className="md:w-1/2 md:pr-8">
            <h3 className="text-green-400 font-medium mb-2">
              {t("projects.featured")}
            </h3>
            <h4 className="text-gray-800 dark:text-gray-50 font-semibold text-lg mb-3">
              {t("projects.technical.title")}
            </h4>
            <p className="text-gray-400 leading-relaxed mb-4 text-sm md:text-base">
              {t("projects.technical.description")}
            </p>
            <p className="text-gray-400 text-sm">
              {t("projects.technical.technologies")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
