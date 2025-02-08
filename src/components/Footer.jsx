import React from 'react'

const Footer = ({darkMode, textColor, textColor2}) => {
  return (
    <div className='flex flex-col py-[40px] gap-[20px] w-full items-center justify-center'>
      <div className={`${textColor2} flex gap-[30px] w-full items-center justify-center`}>
        <a href=""><i className={`fa-brands fa-linkedin text-[2rem] ${darkMode? 'hover:text-[#ffffff]' :'hover:text-[#4a4a4a]'} hover:scale-110 transition-all ease-in-out duration-300`}></i></a>
        <a href=""><i className={`fa-brands fa-github text-[2rem] ${darkMode? 'hover:text-[#ffffff]' :'hover:text-[#4a4a4a]'} hover:scale-110 transition-all ease-in-out duration-300`}></i></a>
        <a href=""><i className={`fa-brands fa-facebook text-[2rem] ${darkMode? 'hover:text-[#ffffff]' :'hover:text-[#4a4a4a]'} hover:scale-110 transition-all ease-in-out duration-300`}></i></a>
        <a href=""><i className={`fa-brands fa-instagram text-[2rem] ${darkMode? 'hover:text-[#ffffff]' :'hover:text-[#4a4a4a]'} hover:scale-110 transition-all ease-in-out duration-300`}></i></a>
      </div>

      <div className={`flex ${textColor}`}> <p>© Georgios Kondylis | All Rights Reserved</p> </div>
    </div>
  )
}

export default Footer