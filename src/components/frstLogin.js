import React, { useContext, useState, useEffect } from "react";
import { UserfContext } from "../context/userState";
import useLocalStorage from "../hooks/useLocalStorage";
import useFetch from "../hooks/useFetch";
import Profile from "./profile";

const FrstLogin = () => {
  const [currentUserState, setCurrentUserState] = useContext(UserfContext);
  const [inpUserType, setInpUserType] = useState("");
  const [{ response }, doFetch] = useFetch("/creategoogleuser");
  const [token] = useLocalStorage("token");

  useEffect(() => {
    if (!response) {
      return;
    }
    console.log("frst login :", response);

    setCurrentUserState((state) => ({
      ...state,
      isLoggedIn: true,
      isNewUser: false,
      currentUser: response.data.userinfo,
    }));
  }, [response, setCurrentUserState]);

  const handleChange = (e) => {
    setInpUserType(e.target.value);
    console.log("handle change", inpUserType);
  };

  const userSelect = (e) => {
    e.preventDefault();
    console.log(inpUserType);
    doFetch({
      method: "post",
      data: {
        token: token,
        usertype: inpUserType,
      },
    });
  };
  console.log();
  return (
    <div>
      {currentUserState.isLoggedIn && (
        <form onSubmit={userSelect}>
          <select id="userType" onChange={handleChange}>
            <option value={null}>Choose One</option>
            <option value="Student" id="student">
              Student
            </option>
            <option value="teacher" id="teacher">
              Teacher
            </option>
          </select>
          <button type="submit">Submit</button>
        </form>
      )}
      {currentUserState.isLoggedIn && <Profile />}
    </div>
  );
};

export default FrstLogin;
