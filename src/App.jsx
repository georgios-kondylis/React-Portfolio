import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);
  const toggleSideNav = () => {
    setSideNavIsOpen((prev) => !prev);
  };

  const [darkMode, setDarkMode] = useState(true);
  const textColor = darkMode ? "text-white" : "text-black";

  return (
    <BrowserRouter>
      <div
        id="BACKGROUND-FIXED"
        className={`
          ${darkMode ? "bg-[url('/hexbg.jpg')]" : "bg-[url('/beigeBG.jpg')]"} 
          bg-cover bg-center h-screen bg-fixed`}
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
