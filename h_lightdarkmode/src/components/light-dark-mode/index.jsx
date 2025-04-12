import React from "react";
import useLocalStorage from "../../customHooks/useLocalStorage";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // console.log("theme", theme);
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <h1>Hello World</h1>
        <button onClick={handleThemeToggle}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
