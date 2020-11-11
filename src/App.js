import React, { useState, useEffect } from "react";
import Home from "./Home";

const App = () => {
  const [isDarkMode, setDarkMode] = useState(true);

  const handleDarkModeButton = () => {
    setDarkMode(true);
    localStorage.setItem("mode", JSON.stringify(true));
  };
  const handleLightModeButton = () => {
    setDarkMode(false);
    localStorage.setItem("mode", JSON.stringify(false));
  };

  useEffect(() => {
    const mode = localStorage.getItem("mode");
    mode && setDarkMode(JSON.parse(mode));
  }, []);

  return (
    <div className={isDarkMode ? "app app-dark" : "app app-light"}>
      <Home
        isDarkMode={isDarkMode}
        handleDarkModeButton={handleDarkModeButton}
        handleLightModeButton={handleLightModeButton}
      />
    </div>
  );
};

export default App;
