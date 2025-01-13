const About = () => {
  return (
    <section
      className=" min-h-screen  grid justify-center content-center transition-colors duration-300 py-6 px-4 sm:px-6 lg:px-8"
      id="about"
    >
      <div className=" w-full max-w-4xl flex  flex-col pr-4">
        <h2 className="text-2xl text-start sm:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Acerca de mí
        </h2>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
          ¡Hola! Soy Edixon Pabón, un ingeniero de sistemas comprometido con la
          excelencia y la innovación en el desarrollo de aplicaciones web. A lo
          largo de mi trayectoria, he trabajado con tecnologías como{" "}
          <span className="text-green-600 dark:text-green-400 font-medium">
            React, Angular
          </span>
          , liderando la creación de componentes reutilizables, interfaces
          accesibles y soluciones que optimizan la experiencia del usuario.
        </p>

        <p className="text-sm md:text-base text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
          Mi experiencia en metodologías{" "}
          <span className="text-green-600 dark:text-green-400 font-medium">
            Agile
          </span>{" "}
          me ha permitido colaborar en entornos multifuncionales, mejorando
          flujos de trabajo y asegurando la entrega de productos de alta
          calidad. Más allá de los aspectos técnicos, creo firmemente que la
          comunicación, el trabajo en equipo y la adaptabilidad son
          fundamentales para superar los desafíos y lograr los objetivos de
          cualquier empresa.
        </p>

        <p className="text-sm md:text-base text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
          Estoy convencido de que mi capacidad para combinar habilidades
          técnicas avanzadas con valores como la responsabilidad, la dedicación
          y el aprendizaje continuo puede marcar la diferencia en el desarrollo
          de soluciones innovadoras y sostenibles para su empresa.
        </p>
      </div>
    </section>
  );
};

export default About;
