const experience = () => {
  return (
    <section className="min-h-screen flex items-center py-12" id="experience">
      <div className="container mx-auto  max-w-3xl">
        <h2 className="text-xl font-medium text-green-400 mb-8">
          02. <span className="text-white">Mi experiencia laboral</span>
        </h2>

        <div className="relative border-l-2 border-green-400 ml-4">
          <div className="mb-12 ml-6">
            <div className="absolute -left-3.5 mt-1 w-6 h-6 bg-green-400 rounded-full border-4 border-gray-900"></div>
            <h3 className="text-white font-semibold text-lg mb-1">
              Desarrollador Front-end | AsisVisa
            </h3>
            <p className="text-gray-400 text-sm mb-4">2022 - 2023</p>
            <p className="text-gray-400 leading-relaxed">
              Contribuí al desarrollo y mantenimiento de aplicaciones web
              utilizando{" "}
              <span className="text-green-400 font-medium">Angular</span> y{" "}
              <span className="text-green-400 font-medium">RxJS</span>. Creé
              componentes personalizados, formularios reactivos y participé en
              la implementación de herramientas para optimizar el código y
              mejorar la productividad del equipo.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Tecnologías: Angular, RxJS, Git, ClickUp, Slack
            </p>
          </div>

          <div className="ml-6">
            <div className="absolute -left-3.5 mt-1 w-6 h-6 bg-green-400 rounded-full border-4 border-gray-900"></div>
            <h3 className="text-white font-semibold text-lg mb-1">
              Desarrollador Web Freelancer
            </h3>
            <p className="text-gray-400 text-sm mb-4">2021 - 2022</p>
            <p className="text-gray-400 leading-relaxed">
              Diseñé y desarrollé landing pages y bibliotecas de componentes
              para clientes utilizando{" "}
              <span className="text-green-400 font-medium">React</span> y{" "}
              <span className="text-green-400 font-medium">Tailwind CSS</span>.
              Proporcioné soluciones centradas en la experiencia del usuario,
              optimizando el rendimiento y la accesibilidad del producto.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Tecnologías: React, Tailwind CSS, JavaScript, Storybook
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
