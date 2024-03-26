import React, { useEffect, useState } from 'react';

function MyComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    // Update document title based on menu state
    document.title = isMenuOpen ? 'Menu Open' : 'Menu Closed';
  }, [isMenuOpen]); // Re-run only when isMenuOpen changes

  return (
    <div>
      <button onClick={toggleMenu}>Toggle Menu</button>
      {isMenuOpen && <p>Menu Content</p>}
    </div>
  );
}
export default MyComponent;