import React from 'react'

const Footer = ({darkMode}) => {
  return (
    <div className='flex flex-col w-full items-center justify-center'>
      <div className='flex w-full items-center justify-center'>
        <a href=""><i className={`fa-brands fa-linkedin text-[2rem] ${darkMode? 'hover:text-[#ffffff]' :'hover:text-[#4a4a4a]'} hover:scale-110 transition-all ease-in-out duration-300`}></i></a>
        <a href=""><i className={`fa-brands fa-github text-[2rem] ${darkMode? 'hover:text-[#ffffff]' :'hover:text-[#4a4a4a]'} hover:scale-110 transition-all ease-in-out duration-300`}></i></a>
        <a href=""><i className={`fa-brands fa-facebook text-[2rem] ${darkMode? 'hover:text-[#ffffff]' :'hover:text-[#4a4a4a]'} hover:scale-110 transition-all ease-in-out duration-300`}></i></a>
        <a href=""><i className={`fa-brands fa-instagram text-[2rem] ${darkMode? 'hover:text-[#ffffff]' :'hover:text-[#4a4a4a]'} hover:scale-110 transition-all ease-in-out duration-300`}></i></a>
      </div>

      <div className='flex gap-[30px]'>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
      <div> <p>© Georgios Kondylis | All Rights Reserved</p> </div>
    </div>
  )
}

export default Footer