const CarouselTecnologies = () => {
    const technologies = [
      "React", "Angular", "Tailwind CSS", "Figma", "JavaScript", 
      "Node.js", "HTML", "CSS", "TypeScript", "Git", "GitHub", "Storybook"
    ];
  
    return (
      <div
        className="flex items-center justify-center py-6"
        id="technologies"
      >
        <div className="max-w-6xl w-full overflow-hidden relative">
          <div className="flex space-x-8 animate-carousel">
            {technologies.concat(technologies).map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-center text-2xl font-bold"
              >
                <p
                  className={`text-transparent bg-gradient-to-r from-green-300 via-teal-400 to-green-500 bg-clip-text stroke-2 stroke-transparent`}
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
  