import React from 'react'
import { useState } from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import Projects from './Projects';
import ContactForm from './contactForm';
import Footer from './Footer';


const Home = ({ darkMode, setDarkMode, textColor2, textColor, sideNavIsOpen, setSideNavIsOpen, toggleSideNav }) => {

  const homeStyles = 'pt-[70px]'

  return (
    <div id='home' className={`pt-[70px]`}>
      <HeroSection textColor={textColor} textColor2={textColor2} darkMode={darkMode}/>
      <AboutSection textColor={textColor} textColor2={textColor2} darkMode={darkMode}/>
      <Projects textColor={textColor} darkMode={darkMode}/>
      <Footer textColor={textColor} darkMode={darkMode} />
    </div>
  )
}

export default Home





