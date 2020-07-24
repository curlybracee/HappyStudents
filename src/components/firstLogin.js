import React, { useContext, useState, useEffect } from "react";
import { UserfContext } from "../context/userState";
import useLocalStorage from "../hooks/useLocalStorage";
import useFetch from "../hooks/useFetch";
import { Redirect } from "react-router-dom";
import classNames from "classnames";

const FrstLogin = () => {
  const [currentUserState, dispatch] = useContext(UserfContext);
  const [inpUserType, setInpUserType] = useState("");
  const [{ response }, doFetch] = useFetch("/creategoogleuser");
  const [token] = useLocalStorage("token");
  const [isSuccessfulluSubmit, setIsSuccessfullySubmit] = useState(false);
  const [selected, setIsSelected] = useState(false);
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

  const userSelect = (e) => {
    //Submitting usertype through useFetch hook
    doFetch({
      method: "post",
      data: {
        token: token,
        usertype: inpUserType,
      },
    });
  };
  const option1 = classNames({
    option: true,
    active: inpUserType === "student",
  });
  const option2 = classNames({
    option: true,
    active: inpUserType === "teacher",
  });
  if (!currentUserState.isLoggedIn) {
    return <Redirect to="/" />;
  }
  if (isSuccessfulluSubmit) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className="firstLogin">
      <h2>Choose How would you like to use your Account</h2>
      <div className="firstLoginForm">
        <div
          className={option1}
          onClick={() => {
            setInpUserType("student");
            setIsSelected(true);
          }}
        >
          <h3>Student</h3>
        </div>
        <div
          className={option2}
          onClick={() => {
            setInpUserType("teacher");
            setIsSelected(true);
          }}
        >
          <h3>Teacher</h3>
        </div>
      </div>
      <button onClick={userSelect}>Submit</button>
    </div>
  );
};

export default FrstLogin;
