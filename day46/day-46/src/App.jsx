

import './App.css'
import Counter from './Counter'
import MyComponent from './themeSwitch/MyComponent';
import ThemeSwitcher from './themeSwitch/ThemeSwitcher';

function App() {
  //const [count, setCount] = useState(0)
  
 ; 

  const lightTheme = {
    backgroundColor: 'white',
    color: 'black',
  };
  
  const darkTheme = {
    backgroundColor: 'black',
    color: 'white',
  };
  //const ThemeContext = React.createContext(lightTheme)
  //<Counter/>
  return (
    <>
    <MyComponent/>
     <ThemeSwitcher/>
    </>
  )
}

export default App
