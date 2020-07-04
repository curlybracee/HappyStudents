import React, { createContext } from "react";
import { useState } from "react";

//Create Context

export const UserfContext = createContext({});

//Provider Component

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [isToken, setIsToken] = useState(token ? true : false);


 

  //Actions
  function userLoging() {
    if(isToken)
    {localStorage.clear();
    setIsToken(!isToken);}

  }

  return (
    <UserfContext.Provider value={{ userLoging, isToken: isToken, token,setIsToken }}>
      {children}
    </UserfContext.Provider>
  );
};
