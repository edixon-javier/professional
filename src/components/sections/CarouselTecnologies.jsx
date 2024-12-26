const CarouselTecnologies = () => {
  const technologies = [
    "React", "Angular", "Tailwind CSS", "Figma", "JavaScript",
    "Node.js", "HTML", "CSS", "TypeScript", "Git", "GitHub", "Storybook",
  ];

  return (
    <div
      className="flex items-center justify-center py-6"
      id="technologies"
    >
      <div className="max-w-2xl md:max-w-4xl sm:max-w-6xl w-full overflow-hidden relative">
        <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 animate-carousel">
          {technologies.concat(technologies).map((tech, index) => (
            <div
              key={index}
              className="flex-shrink-0 text-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold min-w-[120px] sm:min-w-[150px] md:min-w-[180px]"
            >
              <p
                className="text-transparent bg-gradient-to-r from-green-300 via-teal-400 to-green-500 bg-clip-text"
              >
                {tech}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselTecnologies;
