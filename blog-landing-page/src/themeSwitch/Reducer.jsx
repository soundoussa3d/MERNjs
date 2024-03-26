import { lightTheme,darkTheme } from "./ThemeContext";
export function themeReducer(state, action) {
    switch (action.type) {
      case 'TOGGLE_THEME':
        return state === lightTheme ? darkTheme : lightTheme;
      default:
        return state;
    }
  }