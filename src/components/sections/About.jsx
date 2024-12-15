import meImage from "../../assets/photo.png";
import CarouselTecnologies from "./CarouselTecnologies";

const About = () => {
  return (
    <section
      className="min-h-screen grid content-center transition-colors duration-300"
      id="about"
    >
      <div className="max-w-6xl  mx-auto flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-3/5">
          <h2 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-2">
            Acerca de mí
          </h2>
          <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
            ¡Hola! Soy Edixon Pabón, un ingeniero de sistemas apasionado por el
            desarrollo de aplicaciones web. Desde mis inicios, he trabajado con
            tecnologías como
            <span className="text-green-600 dark:text-green-400 font-medium">
              {" "}
              React, Angular y Tailwind CSS
            </span>
            , contribuyendo en la creación de bibliotecas de componentes y
            páginas dinámicas.
          </p>
          <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
            He tenido la oportunidad de colaborar en proyectos clave aplicando
            la metodología
            <span className="text-green-600 dark:text-green-400 font-medium">
              {" "}
              Agile
            </span>
            , donde optimicé flujos de trabajo y mejoré la experiencia del
            usuario. Actualmente, busco seguir creando productos accesibles,
            centrados en la innovación y la eficiencia.
          </p>
          <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
            Aquí hay algunas tecnologías con las que he estado trabajando
            recientemente:
          </p>
        </div>

        <figure className="relative max-w-sm w-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <a href="#">
            <img
              src={meImage}
              alt="Edixon Pabón"
              className="rounded-lg w-100 h-100 object-cover" 
            />
          </a>
          <figcaption className="absolute px-4 text-lg text-white bottom-6">
            <p>Eres el mejor, ok</p>
          </figcaption>
        </figure>
      </div>
      <CarouselTecnologies />
    </section>
  );
};

export default About;
