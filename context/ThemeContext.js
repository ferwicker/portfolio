import React, { useContext } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext()

const useTheme = () => {
  return useContext(ThemeContext);
}

const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
}

const ThemeProvider = (props) => {
  const [darkTheme, setDarkTheme] = React.useState(true);

  const toggleTheme = () => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme} {...props} />
    </ThemeContext.Provider>
  )

}

export { useTheme, useThemeUpdate, ThemeProvider };
