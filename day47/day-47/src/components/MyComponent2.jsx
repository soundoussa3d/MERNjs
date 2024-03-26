import React, { useEffect, useRef } from 'react';

function MyComponent2() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input element on mount
    inputRef.current.focus();
  }, []); // Empty dependency array: Run only once on mount

  return <input ref={inputRef} type="text" />;
}
export default MyComponent2;