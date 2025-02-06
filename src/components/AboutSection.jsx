import React from "react";
import Skills from "./Skills";

import css from '../assets/cssicon.png'
import html from '../assets/htmlicon.png'
import js from '../assets/jsicon.png'
import nextjs from '../assets/nextjsicon.png'
import react from '../assets/reacticon.png'
import tailwind from '../assets/tailwindicon.png'
import node3 from '../assets/node3.png'
import expressicon from '../assets/expressicon.png'
import gsap from '../assets/gsapicon.svg'
import framermotion from '../assets/framermotionicon.svg'
import figma from '../assets/figmaicon.png'
import mongo from '../assets/mongodbicon.png'


const AboutSection = ({textColor, textColor2, darkMode}) => {
  const margins_paddings = `max-sm:px-[20px] max-md:px-[40px] md:px-[60px] lg:px-[100px]`;

  return (
    <div id="about" className={`bg-[#121212] flex flex-col ${margins_paddings} max-md:mt-[100px]`}>

      <div className={`text-white relative w-full flex flex-col mb-[30px]`}>
        <h1 className="mx-auto text-[2.5rem] max-sm:text-[1.8rem] my-[20px]">Passion Fuels Purpose</h1>

        <p className="rounded-lg bg-[#1b1b1b] pb-[20px] pt-[10px] px-[20px] text-[1.2rem] max-md:h-[300px] max-md:overflow-auto">
          Hi, I’m Georgios, a Full-Stack Developer and UI/UX Designer with a passion for creating functional and user-friendly digital experiences.  
          <br /><br />
          With a year of hands-on coding, I’m constantly learning and evolving. I love problem-solving, design, and animation, whether it's debugging tricky errors or refining UI details.  
          <br /><br />
          I write clean, maintainable code and structure projects for scalability and collaboration. From working with APIs to optimizing UI performance, I handle both front-end and back-end to build seamless, high-performing applications.  
          <br /><br />
          For me, coding is more than writing code it's about crafting experiences, solving problems, and bringing ideas to life.
        </p>

        <div className="absolute bottom-0 left-0 w-[20%] h-[3px] bg-gradient-to-r from-[#f5f3dc] to-transparent"></div>

        <div className="absolute bottom-0 left-0 w-[3px] h-[50%] bg-gradient-to-t from-[#f5f3dc] to-transparent"></div>

        <div className="absolute top-[101px] max-sm:top-[83px] max-supersmall:top-[125px] right-0 w-[10%] h-[3px] bg-gradient-to-l from-[#f5f3dc] to-transparent"></div>
       
        <div className="absolute top-[101px] max-sm:top-[83px] max-supersmall:top-[125px] right-0 w-[3px] h-[50%] bg-gradient-to-b from-[#f5f3dc] to-transparent"></div>
      </div>

      <div className={`text-white w-full flex max-sm:flex-col`}>
        <img className="w-[50%] object-contain border-[#f5f3dc] max-sm:w-full sm:max-w-[400px] rounded-lg" src="/LinkedInPIC.jpg" alt="" /> {/*IMAGE*/}
        <div id="Skills" className="w-1/2 h-full max-sm:w-full flex flex-col" >

          <div className="relative mt-[20px] mb-[20px] mx-auto">
            <h1 className=" text-[3rem]">Skills</h1>
            <div className="absolute bottom-[7px] left-0 w-[80%] h-[3px] bg-gradient-to-r from-[#f5f3dc] to-transparent rounded-3xl"></div>
          </div>

          <Skills/>

        </div>
      </div>

    </div>
  );
};

export default AboutSection;
// MINE