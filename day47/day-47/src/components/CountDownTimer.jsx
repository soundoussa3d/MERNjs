import { useState } from "react";
import { useEffect } from "react";


function CountdownTimer() {
    const [currentTime, setCurrentTime] = useState(10);
   
    const countdownEffect = () => {
      const intervalId = setInterval(() => {
        setCurrentTime((prevTime) => prevTime - 1);
      }, 1000);
      
      // Cleanup function: Clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    };
  
    useEffect(() => {
        // Call the countdown effect function
        countdownEffect();
      }, []); // Empty dependency array: Run only once on mount
      
      // OR (if the timer should restart on any state change)
      useEffect(countdownEffect, [currentTime]);
    return (
      <div>
        <h1>Countdown: {currentTime}</h1>
      </div>
    );
  }
  export default CountdownTimer;