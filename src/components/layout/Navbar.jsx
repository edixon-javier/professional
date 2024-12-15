import { useState, useEffect } from "react";

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

  return (
    <nav className="fixed w-full items-center justify-center z-50 bg-black">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Edixon Pabon
        </div>
        <ul className="flex space-x-6">
          <li>
            <button
              onClick={() => handleScroll("hero")}
              className="hover:underline"
            >
              Inicio
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("about")}
              className="hover:underline"
            >
              Sobre mí
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("projects")}
              className="hover:underline"
            >
              Proyectos
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("contact")}
              className="hover:underline"
            >
              Contacto
            </button>
          </li>
        </ul>
        <button
          onClick={changeTheme}
          className="p-2 rounded bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100"
        >
          {theme ? "☀️ Claro" : "🌙 Oscuro"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
