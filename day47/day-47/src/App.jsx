import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import MyComponent1 from './components/MyComponent1'
import MyComponent2 from './components/MyComponent2'
import CountdownTimer from './components/CountDownTimer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountdownTimer/>
    </>
  )
}

export default App
