import meImage1 from "../../assets/04.jpg";
import meImage2 from "../../assets/05.jpg";

const Projects = () => {
  return (
    <section className="min-h-screen flex items-center transition-colors duration-300" id="projects">
      <div className="container mx-auto max-w-6xl text-gray-800 dark:text-gray-50">
        <h2 className="text-xl font-medium mb-6">Algunas cosas que he construido</h2>

        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              src={meImage1}
              alt="Biblioteca de Componentes"
              className="rounded-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-green-400 font-medium mb-2">Proyecto destacado</h3>
            <h4 className="text-gray-800 dark:text-gray-50 font-semibold text-lg mb-3">Biblioteca de Componentes</h4>
            <p className="text-gray-400 leading-relaxed mb-4">
              Desarrollo y mantenimiento de una biblioteca de componentes
              utilizando{" "}
              <span className="text-green-400 font-medium">React, Angular</span>{" "}
              y <span className="text-green-400 font-medium">Storybook</span>.
              Se implementaron pruebas de funcionalidad y accesibilidad para
              garantizar el correcto desempeño y optimización del producto.
            </p>
            <p className="text-gray-400 text-sm">Tecnologías: React, Angular, Tailwind CSS, Storybook</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              src={meImage2}
              alt="Landing Page Dinámica"
              className="rounded-md"
            />
          </div>
          <div className="md:w-1/2 md:pr-8">
            <h3 className="text-green-400 font-medium mb-2">Proyecto destacado</h3>
            <h4 className="text-gray-800 dark:text-gray-50 font-semibold text-lg mb-3">Landing Page Dinámica</h4>
            <p className="text-gray-400 leading-relaxed mb-4">
              Creación de landing pages interactivas y optimizadas utilizando{" "}
              <span className="text-green-400 font-medium">HTML, CSS</span> y{" "}
              <span className="text-green-400 font-medium">React</span>. Estas
              páginas integran herramientas de mejora de la experiencia del
              usuario y son totalmente responsivas.
            </p>
            <p className="text-gray-400 text-sm">Tecnologías: React.js, HTML5, CSS3, Figma</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
