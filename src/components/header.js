import React, { useContext, useState } from "react";
import { UserfContext } from "../context/userState";
import classNames from "classnames";
import { Link } from "react-router-dom";

export const Header = () => {
  const [currentUser, dispatch] = useContext(UserfContext);
  const [showNav, setShowNav] = useState(false);
  const logOut = () => {
    localStorage.clear();
    dispatch({
      type: "SET_UNAUTHORIZED",
    });
    return;
  };
  const navClick = () => {
    setShowNav(!showNav);
  };
  const hamburger = classNames({
    hamburger: true,
    navRotate: showNav,
  });
  const navLinks = classNames({
    "nav-links open": showNav,
    "nav-links": true,
  });

  return (
    <header>
      <div className="header">
        <div className="logo-section">
          <h1>HappyStudents</h1>
        </div>
        {currentUser.isLoggedIn &&
          !currentUser.isNewUser &&
          currentUser.currentUser.name && (
            <nav>
              <div onClick={navClick} className={hamburger}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <ul className={navLinks}>
                <li>
                  <Link onClick={navClick} to="/profile" className="navLink">
                    {currentUser.currentUser.name.split(" ")}
                  </Link>
                </li>
                <li onClick={logOut} className="logout-btn">
                  <Link className='navLink'>Logout</Link>
                </li>
              </ul>
            </nav>
          )}
      </div>
    </header>
  );
};
