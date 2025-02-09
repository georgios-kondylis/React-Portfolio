import React, { useState } from "react";
import SwichBtn from "./SwichBtn";

const Navbar = ({ darkMode, setDarkMode, textColor, sideNavIsOpen, setSideNavIsOpen, toggleSideNav }) => {

  const margins_paddings = `max-sm:px-[20px] max-md:px-[40px] md:px-[60px] lg:px-[100px]`;

  const NavbarStyles = `fixed w-full h-[70px] 
  ${darkMode? 'bg-[rgba(23,23,23,1)]' : 'bg-[#eee4d9] shadow-[0_0_10px_rgba(0,0,0,0.3)]' } 
  border-b border-b-[rgba(225,225,225,0.3)]  
  flex gap-[20px] ${margins_paddings} items-center justify-between transition-all ease-in-out duration-700  z-50`

  return (
    <div
      id="NAVBAR"
      className={`${NavbarStyles}`}>

      <h1 className={`${textColor} text-[1.5rem] max-sm:text-[1.3rem] text-nowrap`}>Georgios <span className={`${darkMode? 'text-[#f5f3dc] ' : textColor} font-extrabold`}>Kondylis</span></h1>
      
      <div className={`${textColor} text-[1.2rem] max-md:text-[1rem] flex items-center gap-4 max-lg:gap-[15px] max-sm:hidden`}> {/* Navlinks */}
        <a href="#home" className={`${!darkMode? 'hover:text-[#4a4a4a]' : 'hover:text-[#f5f3dc]'}  hover:scale-110 transition-all ease-in-out duration-300 `}>Home</a>
        <a href="#about" className={`${!darkMode? 'hover:text-[#4a4a4a]' : 'hover:text-[#f5f3dc]'}  hover:scale-110 transition-all ease-in-out duration-300`}>About</a>
        <a href="#projects" className={`${!darkMode? 'hover:text-[#4a4a4a]' : 'hover:text-[#f5f3dc]'}  hover:scale-110 transition-all ease-in-out duration-300`}>Projects</a>
        <a href="#contact" className={`${!darkMode? 'hover:text-[#4a4a4a]' : 'hover:text-[#f5f3dc]'}  hover:scale-110 transition-all ease-in-out duration-300`}>Contact</a>
      </div>

      <div className="flex items-center gap-[20px]">
          <SwichBtn darkMode={darkMode} setDarkMode={setDarkMode}/>

           <div className={`${textColor}  flex flex-col gap-[6px] sm:hidden cursor-pointer`} 
                onClick={toggleSideNav}>

              <span className={`${!darkMode? 'bg-black' : 'bg-white'} w-[25px] h-[2px] rounded-full  ${sideNavIsOpen ? 'rotate-45 translate-y-[8px]' : ''} transition-all ease-in-out duration-300`}></span>
              <span className={`${!darkMode? 'bg-black' : 'bg-white'} w-[25px] h-[2px] rounded-full ${sideNavIsOpen ? 'opacity-0' : ''} transition-all ease-in-out duration-300`}></span>
              <span className={`${!darkMode? 'bg-black' : 'bg-white'} w-[25px] h-[2px] rounded-full ${sideNavIsOpen ? '-rotate-45 translate-y-[-7px]' : ''} transition-all ease-in-out duration-300`}></span>
           </div>
      </div>
     
      {sideNavIsOpen && <div onClick={() => setSideNavIsOpen(false)} className={`fixed top-[70px] h-[100vh] left-0 bottom-0 right-0 bg-[#04040498] z-0`}></div> }
      
      <div className={`fixed top-0 left-0 ${!sideNavIsOpen ? 'right-[100%] opacity-0 pointer-events-none' :  'right-[60%]' } bottom-0 ${darkMode? 'bg-[#121212]' : 'bg-[#eee4d9]'}  z-50 transition-all ease-in-out duration-300 border-r border-r-[#5c5c5c49]
          flex flex-col items-start`}>
  
        <div className="border-b w-full flex flex-col items-center justify-center h-[70px] border-b-[rgba(225,225,225,0.07)] max-sm:hidden">
          <h1 className={`${textColor} text-[1.5rem] max-sm:text-[1.3rem] text-nowrap`}>Georgios <span className={`${darkMode? 'text-[#f5f3dc] ' : textColor} font-extrabold`}>Kondylis</span></h1>            
        </div> 

        <div className={`${textColor} text-[1.2rem] max-md:text-[1.2rem] max-sm:mt-[50px] flex flex-col items-start gap-5 m-[25px]`}> {/* Navlinks */}
          <a href="" className={`${!darkMode? 'hover:text-[#4a4a4a]' : 'hover:text-[#f5f3dc]'} hover:translate-y-[-3px] hover:scale-110 transition-all ease-in-out duration-300`}>Home</a>
          <a href="" className={`${!darkMode? 'hover:text-[#4a4a4a]' : 'hover:text-[#f5f3dc]'} hover:translate-y-[-3px] hover:scale-110 transition-all ease-in-out duration-300`}>About</a>
          <a href="" className={`${!darkMode? 'hover:text-[#4a4a4a]' : 'hover:text-[#f5f3dc]'} hover:translate-y-[-3px] hover:scale-110 transition-all ease-in-out duration-300`}>Projects</a>
          <a href="" className={`${!darkMode? 'hover:text-[#4a4a4a]' : 'hover:text-[#f5f3dc]'} hover:translate-y-[-3px] hover:scale-110 transition-all ease-in-out duration-300`}>Contact</a>
        </div>
       

      </div>  
    </div>
  );
};

export default Navbar;

// bg-[#eee4d9]