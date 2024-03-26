
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
function ThemeSwitcher() {
    const { toggleTheme } = useContext(ThemeContext);
  
    return (
      <button onClick={toggleTheme} style={{marginLeft:"30%"}}>Toggle Theme</button>
    );
  }
export default ThemeSwitcher