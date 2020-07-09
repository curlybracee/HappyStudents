import React, { useContext, useState } from "react";
import { UserfContext } from "../context/userState";

const FrstLogin = () => {
  const { name, setUserType } = useContext(
    UserfContext
  );
  const [inpUserType,setInpUserType]=useState("");
  const handleChange = (e) => {
    setInpUserType(e.target.value);
    console.log("handle change");
    
  };
  
  const userSelect = (e) => {
    e.preventDefault();
    console.log(inpUserType);
    localStorage.setItem("userType",inpUserType);
    setUserType(inpUserType);   
  };

  return (
    <div>
      {name}
      <form onSubmit={userSelect}>
        <select id="userType" onChange={handleChange}>
          <option value={null} >
            Choose One
          </option>
          <option value="Student" id="student">
            Student
          </option>
          <option value="teacher" id="teacher">
            Teacher
          </option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FrstLogin;
