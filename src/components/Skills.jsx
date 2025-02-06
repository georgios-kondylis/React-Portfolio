import React, { useState } from "react";
import css from "../assets/cssicon.png";
import html from "../assets/htmlicon.png";
import js from "../assets/jsicon.png";
import nextjs from "../assets/nextjsicon.png";
import react from "../assets/reacticon.png";
import tailwind from "../assets/tailwindicon.png";
import node3 from "../assets/node3.png";
import expressicon from "../assets/expressicon.png";
import gsap from "../assets/gsapicon.svg";
import framermotion from "../assets/framermotionicon.svg";
import figma from "../assets/figmaicon.png";
import mongo from "../assets/mongodbicon.png";
import canva from "../assets/canvaicon.png";

const Skills = () => {
  const [dispayedSkills, setDispayedSkills] = useState("Frontend");

  const skills = {
    Frontend: [
      { img: html, name: "HTML" },
      { img: css, name: "CSS" },
      { img: tailwind, name: "Tailwind CSS" },
      { img: js, name: "JavaScript" },
      { img: react, name: "React" },
      { img: nextjs, name: "Next.js" },
      ,
    ],
    Backend: [
      { img: node3, name: "Node.js" },
      { img: expressicon, name: "Express.js" },
      { img: mongo, name: "MongoDB" },
    ],
    "UI/UX": [
      { img: figma, name: "Figma" },
      { img: gsap, name: "GSAP" },
      { img: framermotion, name: "Framer Motion" },
      { img: canva, name: "Canva" },
    ],
  };

  return (
    <div
      id="about"
      className="bg-[#121212] flex flex-col p-6"
    >
      {/* Buttons to switch skills category */}
      <div className="flex w-full justify-around gap-1 mb-6">
        {Object.keys(skills).map((category, i) => (
          <div key={i} className="relative ">
            <button
              key={i}
              className={`${
                dispayedSkills === category? 'text-[#f5dcdc]': ''
                  
              }`}
              onClick={() => setDispayedSkills(category)} // Fix applied here
            >
              {category.toUpperCase()}
            </button>
            {dispayedSkills === category &&  <div className="absolute bottom-[-3px] left-0 w-[80%] h-[3px] bg-gradient-to-r from-[#f5f3dc] to-transparent rounded-3xl"></div>}
           
          </div>
        ))}
      </div>

      {/* Display selected skills */}
      <div className="flex bg-[#1b1b1b] p-2 rounded-lg flex-wrap flex-col max-h-[250px] gap-4">
        {skills[dispayedSkills].map((skill, i) => (
          <div key={i} className="flex items-center gap-2">
            {skill.name === "Next.js" ? (
              <div className="rounded-full w-[40px] h-[40px] bg-white">
                <img
                  className="w-[40px] object-contain rounded-full border"
                  src={nextjs}
                  alt=""
                />
              </div>
            ) : (
              <img
                className={`${skill.name === 'MongoDB'? 'w-[26px] max-sm:w-[20px]' :'w-[40px] max-sm:w-[34px]'} object-contain`}
                src={skill.img}
                alt={skill.name}
              />
            )}

            <p className="max-supersmall:hidden">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
