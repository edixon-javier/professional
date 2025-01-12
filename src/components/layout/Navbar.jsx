import { useState, useEffect } from "react";
import MoonIcon from "../../assets/icons/MomIcon";
import SunIcon from "../../assets/icons/SunIcon";
import { useTranslation } from "react-i18next";

const sections = [
  { id: "hero", label: "Inicio" },
  { id: "about", label: "Sobre mí" },
  { id: "experience", label: "Experiencia" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" },
];

const Navbar = () => {
  const [theme, setTheme] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (theme === false) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === true ? false : true));
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLanguage = (e) => {
    i18n.changeLanguage(e);
  };

  return (
    <nav className="fixed w-full items-center justify-center z-50 pt-6 px-20">
      <div className="mx-auto flex justify-between items-center">
        <div className=" hover:shadow-neon transition-transform transform hover:scale-110">
          <div className="text-3xl cursor-pointer font-bold text-transparent bg-gradient-to-r from-green-300 via-teal-400 to-green-500 bg-clip-text stroke-2 stroke-transparent hover:stroke-neon transition-all">
            EP
          </div>
        </div>
        <div className="flex items-center justify-center space-x-9">
          {sections.map((section) => (
            <button
              onClick={() => handleScroll(section.id)}
              className="text-base line-clamp-3tracking-wide font-medium  font-sans text-gray-900 dark:text-gray-100 hover:text-[#00FF88] dark:hover:text-[#00FF88]"
              key={section.id}
            >
              {section.label}
            </button>
          ))}
          <select
            onChange={(e) => handleLanguage(e.target.value)}
            className="text-sm font-medium font-sans bg-transparent border border-gray-300 dark:border-gray-700 rounded-md px-0 pr-1 py-0.5 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-600 transition duration-200"
          >
            <option
              value="es"
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex items-center"
            >
              Es
            </option>
            <option
              value="en"
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex items-center"
            >
              Us
            </option>
          </select>
          <button aria-label="theme toggler" onClick={changeTheme}>
            {theme ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
