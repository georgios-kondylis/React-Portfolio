import React, { useState, useEffect } from 'react';

const Projects = ({textColor, textColor2, darkMode}) => {
  const margins_paddings = `max-sm:px-[20px] max-md:px-[40px] md:px-[60px] lg:px-[100px]`;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(4); // Default: 4 projects at a time

  const projects = [
    { id: 1, name: "Project 1", color: "bg-blue-300" },
    { id: 2, name: "Project 2", color: "bg-red-300" },
    { id: 3, name: "Project 3", color: "bg-green-300" },
    { id: 4, name: "Project 4", color: "bg-yellow-300" },
    { id: 5, name: "Project 5", color: "bg-purple-300" },
    { id: 6, name: "Project 6", color: "bg-pink-300" },
    { id: 7, name: "Project 7", color: "bg-gray-300" },
    { id: 8, name: "Project 8", color: "bg-orange-300" },
    { id: 9, name: "Project 9", color: "bg-teal-300" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setProjectsPerPage(1); // Show 1 project at a time on small screens
      } else {
        setProjectsPerPage(4); // Show 4 projects in a 2x2 grid on larger screens
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(projects.length / projectsPerPage);

  return (
    <div className={`w-full ${margins_paddings} min-h-screen flex flex-col justify-center items-center p-4 text-white`}>
      <h1 className={` ${textColor} text-2xl font-bold mb-6`}>Projects</h1>
      
      {/* Grid Container */}
      <div className="overflow-hidden w-full ">
        <div
          className="grid transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)`, gridTemplateColumns: `repeat(${totalSlides}, 100%)` }}
        >
          {[...Array(totalSlides)].map((_, slideIndex) => (
            <div key={slideIndex} className="grid grid-cols-1 md:gap-[40px] md:grid-cols-2 w-full min-h-[60vh]">
              {projects.slice(slideIndex * projectsPerPage, (slideIndex + 1) * projectsPerPage).map((project) => (
                <div key={project.id} className="flex flex-col items-center w-full h-full">
                  <h1 className='mb-2'>{project.name}</h1>
                  <div className={`w-full max-w-[480px] h-[250px] ${project.color}`}></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div className='w-full py-6 flex gap-4 justify-center'>
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-8 h-8 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-500'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Projects;
