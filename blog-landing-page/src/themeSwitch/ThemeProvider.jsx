import { lightTheme } from "./ThemeContext";
import { useReducer } from "react";
import { ThemeContext } from "./ThemeContext";
import { themeReducer } from "./Reducer";
function ThemeProvider({ children }) {
    const [theme, dispatch] = useReducer(themeReducer, lightTheme);
  
    const toggleTheme = () => dispatch({ type: 'TOGGLE_THEME' });
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
    
  }
export default ThemeProvider;  