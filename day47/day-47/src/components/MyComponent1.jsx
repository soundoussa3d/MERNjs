import React, { useEffect } from 'react';

function MyComponent1() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('Timer Tick!');
    }, 1000);

    // Cleanup function: Unsubscribe from timer on unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array: Run only once on mount
}
export default MyComponent1;