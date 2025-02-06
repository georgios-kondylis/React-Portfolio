import React from 'react'
import { useState } from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';

const Home = ({ darkMode, setDarkMode, textColor2, textColor, sideNavIsOpen, setSideNavIsOpen, toggleSideNav }) => {

  const homeStyles = 'pt-[70px]'

  return (
    <div id='home' className={`pt-[70px]`}>
      <HeroSection textColor={textColor} textColor2={textColor2} darkMode={darkMode}/>
      <AboutSection textColor={textColor} textColor2={textColor2} darkMode={darkMode}/>

    </div>
  )
}

export default Home





