
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
function MyComponent() {
    const { theme } = useContext(ThemeContext);
  
    return (
      <div style={theme}>Hello theme! </div>
    );
  }
export default MyComponent;  