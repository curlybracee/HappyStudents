import React, { useContext } from "react";
import { UserfContext } from "../context/userState";
import { Login } from "./Login";


export const Home = () => {
  const { isToken } = useContext(UserfContext);

  return (
    <div className="container">
      
        <div className="wall-container">
        <div className=""> {!isToken ? <Login /> : null}</div>
        </div>
        
      
      
     
     
    </div>
  );
};
