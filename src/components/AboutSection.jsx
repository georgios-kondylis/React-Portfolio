import React from "react";

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
        <img className="w-[50%] border-[#f5f3dc] max-sm:w-full sm:max-w-[400px] rounded-lg" src="/LinkedInPIC.jpg" alt="" /> {/*IMAGE*/}
        <div id="Skills" className="w-1/2 max-sm:w-full flex flex-col" >

          <h1 className="text-[3rem] mt-[20px] mb-[30px] mx-auto">Skills</h1>

          <div className="flex pl-[30px] flex-wrap gap-[30px] justify-start w-full">
            <img className="w-[40px] object-contain" src={html} alt="" />
            <img className="w-[35px] object-contain" src={css} alt="" />
            <img className="w-[37px] object-contain rounded-md" src={js} alt="" />
            <img className="w-[37px] object-contain" src={node3} alt="" />
            <img className="w-[40px] object-contain" src={expressicon} alt="" />
            <div className="rounded-full w-[40px] h-[40px] bg-white">
              <img className="w-[40px] object-contain rounded-full border" src={nextjs} alt="" />
            </div>
            <img className="w-[40px] object-contain" src={react} alt="" />
            <img className="w-[43px] object-contain" src={tailwind} alt="" />
            <img className="w-[40px] object-contain" src={gsap} alt="" />
            <img className="w-[39px] object-contain" src={framermotion} alt="" />
            <img className="w-[34px] object-contain" src={figma} alt="" />
          </div>

        </div>
      </div>

    </div>
  );
};

export default AboutSection;
