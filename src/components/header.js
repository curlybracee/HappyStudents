import React, { useContext } from "react";
import {UserfContext} from '../context/userState'
export const Header = () => {
  const[currentUserState,setCurrentUserState]=useContext(UserfContext)
  const logOut = () => {
    localStorage.clear();
    setCurrentUserState({
      isLoggedIn: null,
      currentUser: null,
    });
    window.location.reload(true);
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
  {(currentUserState.isLoggedIn&&!currentUserState.isNewUser&&currentUserState.currentUser.name)&&
  <div>{currentUserState.currentUser.name}
  <button onClick={logOut} className="logout-btn">Logout</button>
  </div>}
      </div>
    </div>
  );
};
