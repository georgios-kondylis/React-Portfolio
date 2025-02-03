import React from 'react'
import { useState } from 'react';
import Card from './Card'


const Home = ({ darkMode, setDarkMode, textColor, sideNavIsOpen, setSideNavIsOpen, toggleSideNav }) => {

  const homeStyles = 'pt-[70px]'

  return (
    <div id='home' onClick={()=> setSideNavIsOpen(false)} className={`w-full flex items-center justify-center pt-[70px]`}>
      
    </div>
  )
}

export default Home






  /* <p>
        1️⃣ "Hey, I'm Georgios, a full-stack MERN developer!"
        2️⃣ "I build dynamic web apps with React, GSAP, and Framer Motion."
        3️⃣ "I work with APIs and craft clean UIs with Figma."
        4️⃣ "Skilled in HTML, CSS, JavaScript, and modern web tools!"
      </p> */
    