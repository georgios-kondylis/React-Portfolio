import React from 'react'
import { useState } from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import Projects from './Projects';
import Contact from './Contact';
import ContactForm from './contactForm';
import Footer from './Footer';


const Home = ({ darkMode, setDarkMode, textColor2, textColor, sideNavIsOpen, setSideNavIsOpen, toggleSideNav }) => {

  const dynamicBorder = `border ${darkMode ? 'border-[#3e3e3e] hover:border-[#f5f3dc] transition-all ease-in-out duration-300' : 'border-[#b5b5b59b] hover:border-[#121212c9] transition-all ease-in-out duration-300'}`;

  return (
    <div id='home' className={`pt-[70px]`}>
      <HeroSection textColor={textColor} textColor2={textColor2} darkMode={darkMode}/>
      <AboutSection textColor={textColor} textColor2={textColor2} darkMode={darkMode}/>
      <Projects textColor={textColor} darkMode={darkMode}/>
      <Contact darkMode={darkMode} textColor={textColor} textColor2={textColor2} dynamicBorder={dynamicBorder}/>
      <Footer textColor={textColor} textColor2={textColor2} darkMode={darkMode} />
    </div>
  )
}

export default Home





