import { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaLaptopCode,
  FaProjectDiagram,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import { MomIcon, SunIcon } from "../../assets/icons";
import { useTranslation } from "react-i18next";

const sections = [
  { id: "hero", label: "Inicio", icon: <FaHome /> },
  { id: "about", label: "Sobre mí", icon: <FaUser /> },
  { id: "experience", label: "Experiencia", icon: <FaLaptopCode /> },
  { id: "projects", label: "Proyectos", icon: <FaProjectDiagram /> },
  { id: "contact", label: "Contacto", icon: <FaEnvelope /> },
];

const Navbar = () => {
  const [theme, setTheme] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (!theme) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme((prevTheme) => !prevTheme);
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
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900 dark:bg-gray-50 dark:bg-opacity-10 bg-opacity-10 shadow-lg rounded-full px-4 py-2 backdrop-blur-0 backdrop-saturate-150">
      <div className="flex items-center space-x-4">
        {sections.map((section) => (
          <div
            key={section.id}
            onClick={() => handleScroll(section.id)}
            className="relative group flex flex-col items-center cursor-pointer"
          >
            <div className="p-3 text-gray-100 bg-[#0A192F] rounded-full group-hover:bg-green-400 group-hover:bg-opacity-90 group-hover:text-white transition-all duration-300">
              {section.icon}
            </div>
            <span className="absolute top-12 text-xs text-gray-400 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">
              {section.label}
            </span>
          </div>
        ))}

        <div className="relative group mx-2">
          <div className="p-3 text-gray-100 bg-[#0A192F] rounded-full group-hover:bg-green-400 group-hover:text-white transition-all duration-300">
            <FaGlobe />
          </div>
          <div className="absolute top-10 left-5 transform -translate-x-1/2 dark:text-white text-black text-sm shadow-lg rounded-lg opacity-0 group-hover:opacity-90 group-hover:translate-y-2 transition-all duration-300">
            <button
              onClick={() => handleLanguage("es")}
              className="block px-4 py-2 rounded-lg hover:bg-green-300 transition-all duration-200"
            >
              Español
            </button>
            <button
              onClick={() => handleLanguage("en")}
              className="block px-4 py-2 rounded-lg hover:bg-green-300 transition-all duration-200"
            >
              English
            </button>
          </div>
        </div>
        <div
          className="p-3 text-gray-100 bg-[#0A192F] rounded-full cursor-pointer hover:bg-green-400 group-hover:text-white transition-all duration-300"
          onClick={changeTheme}
        >
          {theme ? <MomIcon /> : <SunIcon />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
