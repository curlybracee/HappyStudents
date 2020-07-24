import React, { useEffect, useContext } from "react";
import GoogleLogin from "react-google-login";
import useFetch from "../hooks/useFetch";
import useLocalStorage from "../hooks/useLocalStorage";
import { UserfContext } from "../context/userState";
import { Redirect } from "react-router-dom";

export const Home = () => {
  // destructuring states from gloabal state
  const apiUrl = "/user/createuser";
  const [{ response }, doFetch] = useFetch(apiUrl);

  const [, setToken] = useLocalStorage("token");
  const [currentUser, dispatch] = useContext(UserfContext);

  const clientIdLocal =
    "230577544545-47bo9vjq5hsttvtpq418fb2bcqa2r18m.apps.googleusercontent.com";

  // google login button response
  const responseGoogle = (response) => {
    if (response.accessToken) {
      let tempToken = response.tokenId;
      setToken(tempToken);
      doFetch({
        method: "post",
        headers: {
          authorization: `Bearer ${tempToken}`,
        },
      });
    } else {
      console.log(response);
    }
  };

  //if response after google login
  useEffect(() => {
    if (!response) {
      return;
    }
    if (response.msg === "user not exist") {
      dispatch({
        type: "NEW_USER",
      });
    } else {
      dispatch({
        type: "SET_AUTHORIZED",
        token: response.data.token,
        payload: response.data.userinfo,
      });
    }
  }, [response, dispatch]);

  return (
    <div>
      <div className='hero section'>
        {!currentUser.isLoggedIn && (
          <GoogleLogin
            clientId={clientIdLocal}
            buttonText="Google Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        )}
        {currentUser.isNewUser && <Redirect to="/firstlogin" />}
        {currentUser.isLoggedIn && !currentUser.isNewUser && (
          <Redirect to="/profile" />
        )}
      </div>
      <div className="courses section">

      </div>
      <div className="courses section">

      </div>
    </div>
  );
};
