import React, { createContext, useState } from "react";
//Create Context
export const UserfContext = createContext([{}, () => {}]);
//Provider Component
export const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    isLoggedIn: null,
    isNewUser: null,
    currentUser: null,
  });
  return (
    <UserfContext.Provider value={[state, setState]}>
      {children}
    </UserfContext.Provider>
  );
};
