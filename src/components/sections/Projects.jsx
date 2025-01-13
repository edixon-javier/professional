import levelUp from "../../assets/levelup.png";
import technical from "../../assets/technical.png";

const Projects = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center transition-colors duration-300 px-4"
      id="projects"
    >
      <div className="container w-full max-w-4xl text-gray-800 dark:text-gray-50">
        <h2 className="text-2xl text-start sm:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
          Algunas cosas que he construido
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
                src={levelUp}
                alt="LevelUp"
                className="rounded-md transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-md flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    LevelUp
                  </h3>
                  <i className="fas fa-arrow-right text-white text-2xl"></i>
                </div>
              </div>
            </a>
          </div>

          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-green-400 font-medium mb-2">
              Proyecto destacado
            </h3>
            <h4 className="text-gray-800 dark:text-gray-50 font-semibold text-lg mb-3">
              LevelUp
            </h4>
            <p className="text-gray-400 leading-relaxed mb-4 text-sm md:text-base">
              Desarrollé una aplicación interactiva utilizando{" "}
              <span className="text-green-400 font-medium">React</span> y{" "}
              <span className="text-green-400 font-medium">Tailwind CSS</span>,
              conectada a una API de videojuegos para mostrar información
              detallada sobre diversos títulos. Aunque no está diseñada para ser
              una tienda, la aplicación simula un catálogo dinámico de
              videojuegos, permitiendo a los usuarios explorar datos como el
              nombre, la imagen, la puntuación y las descripciones. La interfaz
              fue diseñada para ser completamente responsiva y accesible en
              diferentes dispositivos.
            </p>
            <p className="text-gray-400 text-sm">
              Tecnologías: React, Tailwind CSS, API de Videojuegos
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
                alt="Technical"
                className="rounded-md transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-md flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    Technical
                  </h3>
                  <i className="fas fa-arrow-right text-white text-2xl"></i>
                </div>
              </div>
            </a>
          </div>
          <div className="md:w-1/2 md:pr-8">
            <h3 className="text-green-400 font-medium mb-2">
              Proyecto destacado
            </h3>
            <h4 className="text-gray-800 dark:text-gray-50 font-semibold text-lg mb-3">
              Technical
            </h4>
            <p className="text-gray-400 leading-relaxed mb-4 text-sm md:text-base">
              Esta fue una prueba técnica en la que desarrollé una aplicación
              para consumir una API de usuarios utilizando{" "}
              <span className="text-green-400 font-medium">React</span> y{" "}
              <span className="text-green-400 font-medium">Tailwind CSS</span>.
              La aplicación permite realizar operaciones como visualizar,
              editar, filtrar y eliminar usuarios. A través de una interfaz
              intuitiva los usuarios pueden interactuar con la lista de datos de
              manera eficiente. Este proyecto tiene como objetivo demostrar
              habilidades en el manejo de APIs y la gestión de datos en el
              front-end.
            </p>
            <p className="text-gray-400 text-sm">
              Tecnologías: React.js, Tailwind CSS, API
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
