import { useState } from "react"

//import React from 'react'

function Counter() {
    const [number , setNumber] = useState(0);
    function increase() {
        setNumber(number+1);
    }
    function decrease() {
        setNumber(number-1);
    }
  return (
    <div>
        <button onClick={()=>decrease()}>decrease number</button>
        <span>
            My number : {number}
        </span>
        <button onClick={()=>increase()}>
            Increase number
        </button>
    </div>
  )
}

export default Counter