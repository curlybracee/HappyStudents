import React, { useEffect, useContext } from "react";
import GoogleLogin from "react-google-login";
import useFetch from "../hooks/useFetch";
import useLocalStorage from "../hooks/useLocalStorage";
import { UserfContext } from "../context/userState";
import FirstLogin from "./frstLogin";
import Profile from "./profile";
export const Home = () => {
  // destructuring states from gloabal state
  const apiUrl = "/getgoogletoken";
  const [{ response }, doFetch] = useFetch(apiUrl);
  const [, setToken] = useLocalStorage("token");
  const [currentUser, setCurrentUser] = useContext(UserfContext);

  useEffect(() => {
    if (!response) {
      return;
    }
    console.log("home :", response);
    if (response.msg === "user not exist") {
      setCurrentUser((state) => ({
        ...state,
        isLoggedIn: true,
        isNewUser: true,
      }));
    } else {
      setCurrentUser((state) => ({
        ...state,
        isLoggedIn: true,
        isNewUser: false,
        currentUser: response.data.userinfo,
      }));
    }
  }, [response, setCurrentUser]);

  // google login button response
  const responseGoogle = (response) => {
    if (response.accessToken) {
      let tempToken = response.tokenId;
      setToken(tempToken);
      console.log('google',response)
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

  console.log("new user :", currentUser.isNewUser);

  return (
    <div>
      {!currentUser.isLoggedIn && (
        <GoogleLogin
          clientId="686761631837-91j44uet25c6ln8fhl1ijfmdqii6v973.apps.googleusercontent.com"
          buttonText="Google Login"
          onSuccess={responseGoogle} 
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      )}
      {currentUser.isNewUser && <FirstLogin />}
      {currentUser.isLoggedIn && !currentUser.isNewUser && <Profile />}
    </div>
  );
};
