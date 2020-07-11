import React, { useEffect, useState, useContext } from "react";
import GoogleLogin from "react-google-login";
import useFetch from "../hooks/useFetch";
import useLocalStorage from "../hooks/useLocalStorage";
import { UserfContext } from "../context/userState";
import FirstLogin from "./frstLogin";

export const Home = () => {
  // destructuring states from gloabal state
  const apiUrl = "/getgoogletoken";
  const [{ response }, doFetch] = useFetch(apiUrl);
  const [token, setToken] = useLocalStorage("token");
  const [isNewUser, setIsNewUser] = useState(false);
  const [currentUser, setCurrentUser] = useContext(UserfContext);

  useEffect(() => {
    if (!response) {
      return;
    }
    console.log("home :", response);
    if (response.msg === "user not exist") {
      setIsNewUser(true);
      setCurrentUser((state) => ({
        ...state,
        isLoggedIn: true,
      }));
    } else {
      setCurrentUser((state) => ({
        ...state,
        isLoggedIn: true,
        currentUser: response.data.userinfo,
      }));
    }
  }, [response, setCurrentUser]);

  // google login button response
  const responseGoogle = (response) => {
    if (response.accessToken) {
      let tempToken = response.tokenId;
      setToken(tempToken);
      doFetch({
        method: "post",
        data: {
          token: tempToken,
        },
      });
    } else {
      console.log(response);
    }
  };

  const logOut = () => {
    localStorage.clear();
    setCurrentUser({
      isLoggedIn: null,
      currentUser: null,
    });
    window.location.reload(true);
  };

  return (
    <div>
      {!currentUser.isLoggedIn && (
        <GoogleLogin
          clientId="230577544545-dodqre3umhpuvvdc48j6lnar0tidiudh.apps.googleusercontent.com"
          buttonText="Google Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      )}

      {currentUser.isLoggedIn && !isNewUser && (
        <div>
          happy to see you,{currentUser.currentUser.name}
          <div>
            Already logged
            <button onClick={logOut}>Logout</button>
          </div>
        </div>
      )}

      {isNewUser && (
        <div>
          <FirstLogin />
          <button onClick={logOut}>Logout</button>
        </div>
      )}
    </div>
  );
};
