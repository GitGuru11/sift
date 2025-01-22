import React, { createContext, useState } from 'react';

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [activeNavItem, setActiveNavItem] = useState(null);

  return (
    <NavContext.Provider value={[activeNavItem, setActiveNavItem]}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContext;