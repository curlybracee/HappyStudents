import React, { useContext, useState, useEffect } from "react";
import { UserfContext } from "../context/userState";
import useLocalStorage from "../hooks/useLocalStorage";
import useFetch from "../hooks/useFetch";
import { Redirect } from "react-router-dom";

const FrstLogin = () => {
  const [currentUserState, dispatch] = useContext(UserfContext);
  const [inpUserType, setInpUserType] = useState("");
  const [{ response }, doFetch] = useFetch("/creategoogleuser");
  const [token] = useLocalStorage("token");
  const [isSuccessfulluSubmit, setIsSuccessfullySubmit] = useState(false);

  //if response after choosing user type
  useEffect(() => {
    if (!response) {
      return;
    }

    dispatch({
      type: "SET_AUTHORIZED",
      token: response.data.token,
      payload: response.data.userinfo,
    });
    setIsSuccessfullySubmit(true);
  }, [response, dispatch]);

  const handleChange = (e) => {
    setInpUserType(e.target.value);
  };

  const userSelect = (e) => {
    e.preventDefault();
    //Submitting usertype through useFetch hook
    doFetch({
      method: "post",
      data: {
        token: token,
        usertype: inpUserType,
      },
    });
  };

  if (!currentUserState.isLoggedIn) {
    return <Redirect to="/" />;
  }
  if (isSuccessfulluSubmit) {
    return <Redirect to="/profile" />;
  }

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
    </div>
  );
};

export default FrstLogin;
