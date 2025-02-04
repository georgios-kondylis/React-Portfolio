import React from 'react'
import { useState } from 'react';
import HeroSection from './HeroSection';

const Home = ({ darkMode, setDarkMode, textColor2, textColor, sideNavIsOpen, setSideNavIsOpen, toggleSideNav }) => {

  const homeStyles = 'pt-[70px]'

  return (
    <div id='home' className={`pt-[70px]`}>
      <HeroSection textColor={textColor} textColor2={textColor2} darkMode={darkMode}/>

    </div>
  )
}

export default Home





