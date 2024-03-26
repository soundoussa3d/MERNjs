
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
function ThemeSwitcher() {
    const { toggleTheme } = useContext(ThemeContext);
  
    return (
      <button onClick={toggleTheme}>Toggle Theme</button>
    );
  }
export default ThemeSwitcher