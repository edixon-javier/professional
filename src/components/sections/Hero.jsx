import Cv from "../../downloads/Edixon_Pabon_Cv.pdf";
import { BackgroundLines } from "../ui/background-lines";

const Hero = () => {
  const handleLanguage = () => {
    window.open(Cv, "_blank");
  };

  return (
    <section id="hero">
      <BackgroundLines className="flex items-center justify-center h-screen px-4">
        <div className="flex flex-col items-start w-full max-w-4xl">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl  lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight whitespace-nowrap">
            <h2 className="text-green-600 dark:text-green-400 mb-2 text-2xl">
              Hola, mi nombre es
            </h2>
            <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold">
              Edixon Pabon,{" "}
            </h1>
            Transformo ideas en experiencias.
          </h1>
          <div className="w-full text-sm md:text-base text-neutral-700 dark:text-neutral-400 ">
            Soy ingeniero de sistemas especializado en desarrollo front-end y la
            creación de experiencias digitales centradas en el usuario. Combino
            mi creatividad y habilidades técnicas para construir soluciones
            innovadoras y accesibles que optimizan la productividad del equipo y
            mejoran la experiencia del usuario.
          </div>
          <div className="mt-14 relative z-10">
            <button
              onClick={handleLanguage}
              rel="noopener noreferrer"
              className="text-green-600 dark:text-green-400 border border-green-600 dark:border-green-400 rounded py-3 px-6 hover:bg-green-600 hover:text-white dark:hover:bg-green-400 dark:hover:text-gray-900 transition duration-300"
            >
              ¡Echa un Vistazo a Mi CV!
            </button>
          </div>
        </div>
      </BackgroundLines>
    </section>
  );
};

export default Hero;
