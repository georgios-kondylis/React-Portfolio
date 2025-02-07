import React, { useState, useEffect } from "react";
import appleFull from "../assets/Project pics/applebig.png";
import brainwavefull from "../assets/Project pics/Brainwave.png";
import spotify from "../assets/Project pics/spotiBig.png";
import L_O from "../assets/Project pics/lotusOlivePC.png";
import flagapp from "../assets/Project pics/flagsPC.png";
import pong from "../assets/Project pics/PONG.mp4";
import snake from "../assets/Project pics/snake.mov";

//-----------------------------------------------------
import css from "../assets/icons/cssicon.png";
import html from "../assets/icons/htmlicon.png";
import js from "../assets/icons/jsicon.png";
import nextjs from "../assets/icons/nextjsicon.png";
import react from "../assets/icons/reacticon.png";
import tailwind from "../assets/icons/tailwindicon.png";
import node3 from "../assets/icons/node3.png";
import expressicon from "../assets/icons/expressicon.png";
import gsap from "../assets/icons/gsapicon.svg";
import framermotion from "../assets/icons/framermotionicon.svg";
import figma from "../assets/icons/figmaicon.png";
import mongo from "../assets/icons/mongodbicon.png";
import canva from "../assets/icons/canvaicon.png";
import restApi from "../assets/icons/RESTapi.png"
import threeJS from "../assets/icons/3js.png"
import MUI from "../assets/icons/MUI.png"
//-----------------------------------------------------

const Projects = ({ textColor }) => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(4);

  const projects = [
    { id: 1, name: "Apple Clone", img: appleFull, skillImages: [react, tailwind, gsap, threeJS], description: "Apple clone is my first project with an interactive 3D model of an iPhone." },
    { id: 2, name: "Flag App", skillImages: [react, tailwind, restApi], img: flagapp, description: "A restaurant website with a modern and elegant design." },
    { id: 3, name: "Spotify Clone", skillImages: [react, MUI, restApi], img: spotify, description: "A clone of Spotify's interface with custom features." },
    { id: 4, name: "Lotus & Olive Restaurant", skillImages: [html, css, js], img: L_O, description: "A restaurant website with a modern and elegant design." },
    { id: 5, name: "Brainwave", skillImages: [react, tailwind, gsap], img: brainwavefull, description: "Brainwave is a futuristic UI design project." },
    { id: 6, name: "Pong Game", skillImages: [react, tailwind, gsap], video: pong, description: "Brainwave is a futuristic UI design project." },
    { id: 7, name: "Snake Game", skillImages: [react, tailwind, gsap], video: snake, description: "Brainwave is a futuristic UI design project." },
  ];

  useEffect(() => {
    const handleResize = () => {
      setProjectsPerPage(window.innerWidth < 768 ? 1 : 4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(projects.length / projectsPerPage);

  return (
    <div className="w-full px-4 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center items-center p-4 text-white">
      <h1 className={`${textColor} text-2xl font-bold mb-6`}>Projects</h1>

      {/* Grid Container */}
      <div className="overflow-hidden w-full">
        <div
          className="grid transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            gridTemplateColumns: `repeat(${totalSlides}, 100%)`,
          }}
        >
          {[...Array(totalSlides)].map((_, slideIndex) => (
            <div key={slideIndex} className="grid grid-cols-1 md:grid-cols-2 md:gap-10 w-full min-h-[60vh]">
              {projects
                .slice(slideIndex * projectsPerPage, (slideIndex + 1) * projectsPerPage)
                .map((project) => (
                  <div key={project.id} className="flex flex-col items-center w-full h-full">
                    <h1 className="mb-2">{project.name}</h1>
                    <div
                      className="relative overflow-hidden rounded-lg"
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      {project.video? <video src={project.video}></video> : <img className="rounded-lg w-full" src={project.img} alt={project.name} />}
                      <div
                        className={` 
                          absolute inset-0 bg-[#171717ec] w-full flex flex-col justify-between items-center text-white transition-all duration-300 ease-in-out
                          ${hoveredProject === project.id ? "translate-y-[0px] opacity-100" : "translate-y-full opacity-0"}`}
                      >
                        <h1 className="text-[1rem] font-semibold p-4 text-left">{project.description}</h1>
                        
                        <div className="absolute flex gap-[10px] p-[20px] bottom-0 left-0">
                          {project.skillImages?.map((img, i) => <img key={i} src={img} className="object-contain w-[20px]"/>)}
                        </div>
                        <div className="absolute flex gap-[10px] p-[20px] bottom-0 right-0">
                          <i className="text-[1.3rem] fa-solid fa-arrow-up-right-from-square"></i>
                          <i className="text-[1.3rem] fa-brands fa-github"></i>
                        </div>
                   
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="w-full py-6 flex gap-4 justify-center">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-8 h-8 rounded-full transition-all duration-300
              ${currentSlide === index ? "bg-blue-500 scale-110" : "bg-gray-500"}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Projects;
