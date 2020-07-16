import React, { useContext } from "react";
import { UserfContext } from "../context/userState";
import { Redirect } from "react-router-dom";

export const Header = () => {
  const [currentUser, dispatch] = useContext(UserfContext);

  const logOut = () => {
    localStorage.clear();
    dispatch({
      type: "SET_UNAUTHORIZED",
    });
    return <Redirect to="/" />;
  };

  return (
    <div className="header">
      <h1>HappyStudents</h1>
      <div className="searchBar">
        <form>
          <input
            type="text"
            className="searchInput"
            placeholder="Search Course"
          />
        </form>
      </div>
      <div className="user-panel">
        {currentUser.isLoggedIn &&
          !currentUser.isNewUser &&
          currentUser.currentUser.name && (
            <div>
              {currentUser.currentUser.name}
              <button
              onClick={logOut}
              className="logout-btn">
              Logout
              </button>
            </div>
          )}
      </div>
    </div>
  );
};
