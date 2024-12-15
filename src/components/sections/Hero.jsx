const Hero = () => (
  <section id="hero" className="min-h-screen flex items-center justify-center  text-gray-300">
    <div className="text-left max-w-4xl">
      <p className="text-green-400 mb-2">Hola, mi nombre es</p>
      <h1 className="text-7xl sm:text-7xl font-bold text-gray-100">
        Edixon Pabon
      </h1>
      <h2 className="text-4xl sm:text-6xl font-bold text-gray-400 mt-2">
        Tranformo ideas en experiencias
      </h2>
      <p className="mt-4 text-lg sm:text-base text-gray-400 leading-relaxed">
        Soy ingeniero de sistemas especializado en desarrollo front-end y la
        creación de experiencias digitales centradas en el usuario.
         Combino mi creatividad y habilidades
        técnicas para construir soluciones innovadoras y accesibles que
        optimizan la productividad del equipo y mejoran la experiencia del
        usuario.
      </p>

      <div className="mt-8">
        <a
          href="#"
          className="text-green-400 border border-green-400 rounded py-3 px-6 hover:bg-green-400 hover:text-gray-800 transition duration-300"
        >
          ¡contáctame!
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
