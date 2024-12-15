import meImage from "../../assets/photo.png";

const About = () => {
  return (
    <section className="min-h-screen flex items-center py-12" id="about">
      <div className="container   max-w-3xl mx-auto flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-3/5">
          <h2 className="text-xl font-medium text-green-400 mb-2">
            01. <span className="text-white">Acerca de mí</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            ¡Hola! Soy Edixon Pabón, un ingeniero de sistemas apasionado por el
            desarrollo de aplicaciones web. Desde mis inicios, he trabajado con
            tecnologías como
            <span className="text-green-400 font-medium">
              {" "}
              React, Angular y Tailwind CSS
            </span>
            , contribuyendo en la creación de bibliotecas de componentes y
            páginas dinámicas.
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            He tenido la oportunidad de colaborar en proyectos clave aplicando
            la metodología
            <span className="text-green-400 font-medium"> Agile</span>, donde
            optimicé flujos de trabajo y mejoré la experiencia del usuario.
            Actualmente, busco seguir creando productos accesibles, centrados en
            la innovación y la eficiencia.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Aquí hay algunas tecnologías con las que he estado trabajando
            recientemente:
          </p>
          <ul className="grid grid-cols-2 gap-2 mt-4 text-sm text-gray-300">
            <li>&#x25B8; React.js</li>
            <li>&#x25B8; Angular</li>
            <li>&#x25B8; Tailwind CSS</li>
            <li>&#x25B8; Storybook</li>
            <li>&#x25B8; Node.js</li>
            <li>&#x25B8; Git & GitHub</li>
          </ul>
        </div>

        <div className="md:w-2/5 flex justify-center mt-8 md:mt-0">
          <div className="relative ">
            <img src={meImage} alt="Edixon Pabón" className="rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
