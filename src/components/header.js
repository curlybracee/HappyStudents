import React from "react";
import { UserfContext } from "../context/userState";
import { useContext } from "react";

export const Header = () => {
  const { userLoging, isToken } = useContext(UserfContext);

  const userStatus = isToken ? "Logout" : "Login";

  return (
    <div className="header-container">
      <h1>
       HappyStudents
      </h1>
      <div className="searchBar">
        <form>
          <input
            type="text"
            className="searchInput"
            placeholder="Search Course"
          />
        </form>
      </div>
      <button className="loginButton" onClick={userLoging}>
        {userStatus}
      </button>
    </div>
  );
};
