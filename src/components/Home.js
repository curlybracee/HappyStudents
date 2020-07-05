import React, { useContext } from "react";
import { UserfContext } from "../context/userState";



export const Home = () => {
  const { isToken } = useContext(UserfContext);

 
  return (
    <div className="container">
      
        <div className="wall-container">
          
        </div>
        
      
      
     
     
    </div>
  );
};
