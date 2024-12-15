const Hero = () => (
  <section
    id="hero"
    className="min-h-screen flex items-center justify-center font-serif transition-colors duration-300"
  >
    <div className="text-left max-w-6xl">
      <h1 className="text-green-600 dark:text-green-400 mb-6 text-2xl">
        Hola, mi nombre es
      </h1>

      <h2 className="text-6xl sm:text-8xl font-bold text-gray-800 dark:text-gray-100">
        Edixon Pabon
      </h2>

      <h3 className="text-4xl sm:text-6xl font-bold text-gray-600 dark:text-gray-400 mt-2">
        Transformo ideas en experiencias.
      </h3>

      <p className="mt-5 text-lg max-w-2xl text-gray-700 dark:text-gray-400 sm:text-base">
        Soy ingeniero de sistemas especializado en desarrollo front-end y la
        creación de experiencias digitales centradas en el usuario. Combino mi
        creatividad y habilidades técnicas para construir soluciones innovadoras
        y accesibles que optimizan la productividad del equipo y mejoran la
        experiencia del usuario.
      </p>

      <div className="mt-14">
        <a
          href="#"
          className="text-green-600 dark:text-green-400 border border-green-600 dark:border-green-400 rounded py-3 px-6 hover:bg-green-600 hover:text-white dark:hover:bg-green-400 dark:hover:text-gray-900 transition duration-300"
        >
          ¡Contáctame!
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
