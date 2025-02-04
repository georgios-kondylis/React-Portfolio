import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);
  const toggleSideNav = () => {
    setSideNavIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const closeSideNav = () => {
      if(window.innerWidth > 640) {
        setSideNavIsOpen(false)
      }
    }
    closeSideNav() // Run once on mount to check initial width

    window.addEventListener('resize', closeSideNav);
    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", closeSideNav);
  },[])

  const [darkMode, setDarkMode] = useState(true);
  const textColor = darkMode ? "text-white" : "text-black";
  const textColor2 = darkMode ? "text-[#f5f3dc]" : "text-black";

  return (
    <BrowserRouter>
      <div
        id="BACKGROUND-FIXED"
        className={`${darkMode ? "bg-[#121212] bg-cover bg-center bg-fixed" : "bg-[url('/beigeBG.jpg')] bg-cover bg-center bg-fixed"} max-md:h-[200vh] h-full`}
        style={darkMode ? { backgroundImage: "url('/Swatch.png'), url('/grid-peice.png')" } : {}}
      >
        {/* Always show the Navbar on the / route */}
        <Navbar
          sideNavIsOpen={sideNavIsOpen}
          setSideNavIsOpen={setSideNavIsOpen}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          textColor={textColor}
          toggleSideNav={toggleSideNav}
        />
        {/* Routes */}
        <Routes>
          {/* Index route to render Home under the Navbar */}
          <Route
            index
            element={
              <Home
                sideNavIsOpen={sideNavIsOpen}
                setSideNavIsOpen={setSideNavIsOpen}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                textColor={textColor}
                textColor2={textColor2}
                toggleSideNav={toggleSideNav}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
