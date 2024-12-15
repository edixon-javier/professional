import { useState, useEffect } from "react";
import MoonIcon from "../../assets/icons/MomIcon";
import SunIcon from "../../assets/icons/SunIcon";

const Navbar = () => {
  const [theme, setTheme] = useState(false);

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

  const sections = [
    { id: "hero", label: "Inicio" },
    { id: "about", label: "Sobre mí" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Proyectos" },
    { id: "contact", label: "Contacto" },
  ];

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
          <button aria-label="theme toggler" onClick={changeTheme}>
            {theme ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
