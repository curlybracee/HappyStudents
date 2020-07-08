import React, { createContext } from "react";
import { useState } from "react";

//Create Context

export const UserfContext = createContext({});

//Provider Component

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [name, setName] = useState(localStorage.getItem("name"));
  const [usertype, setUserType] = useState("student");

  //Actions

  return (
    <UserfContext.Provider
      value={{
        token,
        setToken,
        name,
        setName,
        usertype,
        setUserType,
      }}
    >
      {children}
    </UserfContext.Provider>
  );
};
