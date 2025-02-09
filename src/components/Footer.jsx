import React from 'react'
import react from "../assets/icons/reacticon.png";
import tailwind from "../assets/icons/tailwindicon.png";
import framermotion from "../assets/icons/framermotionicon.svg";
import restApi from "../assets/icons/RESTapi.png"
import MUI from "../assets/icons/MUI.png";
import { margins_paddings } from '../utils';


const Footer = ({darkMode, textColor, textColor2}) => {
  return (
    <div className={`flex max-md:flex-col-reverse max-md:items-center py-[40px] gap-[20px] w-full items-start justify-between ${margins_paddings}`}>

      <div className='flex flex-col gap-[20px]'>
        <div className={`${textColor2} flex gap-[30px] w-full max-md:justify-center justify-start`}>
          <a href=""><i className={`fa-brands fa-linkedin text-[2rem] ${darkMode? 'hover:text-[#ffffff]' :'hover:text-[#4a4a4a]'} hover:scale-110 transition-all ease-in-out duration-300`}></i></a>
          <a href=""><i className={`fa-brands fa-github text-[2rem] ${darkMode? 'hover:text-[#ffffff]' :'hover:text-[#4a4a4a]'} hover:scale-110 transition-all ease-in-out duration-300`}></i></a>
          <a href=""><i className={`fa-brands fa-facebook text-[2rem] ${darkMode? 'hover:text-[#ffffff]' :'hover:text-[#4a4a4a]'} hover:scale-110 transition-all ease-in-out duration-300`}></i></a>
          <a href=""><i className={`fa-brands fa-instagram text-[2rem] ${darkMode? 'hover:text-[#ffffff]' :'hover:text-[#4a4a4a]'} hover:scale-110 transition-all ease-in-out duration-300`}></i></a>
        </div>

        <div className={`flex ${textColor}`}> <p>© Georgios Kondylis | All Rights Reserved</p> </div>
      </div>

      <div className={`${textColor2} flex flex-col gap-[20px] items-end`}>

        <div className='flex gap-[20px] px-[4px]'>
          <img className='object-contain w-[30px]' src={react} alt="" />
          <div className={`${!darkMode? 'bg-[#1c1c1c] w-fit rounded-full' : ''}`}>
            <img className='object-contain w-[30px]' src={restApi} alt="" />
          </div>
          <img className='object-contain w-[30px]' src={tailwind} alt="" />
          <img className='object-contain w-[30px]' src={framermotion} alt="" />
          <img className='object-contain w-[30px]' src={MUI} alt="" />
          
         
        </div>

        <h1  className={` ${textColor}`}>Tools i used to create this portfolio.</h1>

      </div>
     
    </div>
  )
}

export default Footer