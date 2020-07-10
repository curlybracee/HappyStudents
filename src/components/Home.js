import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import useFetch from "../hooks/useFetch";
import FirstLogin from "./frstLogin";
import useLocalStorage from "../hooks/useLocalStorage";

export const Home = () => {
  // destructuring states from gloabal state
  const apiUrl = "/getgoogletoken";
  const [{ response }, doFetch] = useFetch(apiUrl);
  const [token, setToken] = useLocalStorage("token");
  const [userType, setUserType] = useLocalStorage("userType");

  useEffect(() => {
    if (!response) {
      return;
    }
    if (response.msg === "user not exist")
      doFetch({
        method: "post",
        data: {
          token,
          usertype: "teacher",
        },
      });
    if (response.data.userinfo.usertype)
      setUserType(response.data.userinfo.usertype);
  }, [response, setToken, doFetch, token, setUserType]);

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

  if (token === "null") {
    return (
      <GoogleLogin
        clientId="230577544545-dodqre3umhpuvvdc48j6lnar0tidiudh.apps.googleusercontent.com"
        buttonText="Google Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    );
  } else if (token !== "null") {
    return (
      <div>
        happy to see youu
        <div>
          Already logged
          <button
            onClick={() => {
              setToken(null);
            }}
          >
            Logout
          </button>
        </div>
        <div hidden={userType !== "null" ? true : false}>
          <FirstLogin />
        </div>
      </div>
    );
  }
};
