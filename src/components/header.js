import React from "react";
import { UserfContext } from "../context/userState";
import { useContext } from "react";

export const Header = () => {
  const { userLoging, isToken } = useContext(UserfContext);

  console.log(isToken);

  const userStatus = isToken ? "Logout" : "Login";

  return (
    <div className="d-flex justify-content-between">
      <h1>happyStudents</h1>
      <button onClick={userLoging}>{userStatus}</button>
    </div>
  );
};
