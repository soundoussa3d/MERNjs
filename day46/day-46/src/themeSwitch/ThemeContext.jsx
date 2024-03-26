import React from 'react';
export const lightTheme = {
    backgroundColor: 'white',
    color: 'black',
  };
  
export   const darkTheme = {
    backgroundColor: 'black',
    color: 'white',
  };
export  const ThemeContext = React.createContext(lightTheme); // Default theme
