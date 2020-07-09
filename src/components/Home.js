import React, { useContext, useEffect, useState } from "react";
import { UserfContext } from "../context/userState";
import GoogleLogin from "react-google-login";
// import FrstLogin from "./frstLogin";
import axios from "axios";

export const Home = () => {
  // destructuring states from gloabal state
  const { setName, token, setToken, usertype, setUserType, name } = useContext(
    UserfContext
  );
  const [loginState, setLoginState] = useState();
  //Checking whether the user already registered or not

  useEffect(() => {
    console.log("token:" + token);

    if (token !== null && usertype === null) {
      axios
        .post("http://54.169.208.124:9000/api/getgoogletoken", {
          token
        })
        .then((res) => {
          localStorage.setItem("userType", res.data.data.userinfo.usertype);
          setUserType(res.data.data.userinfo.usertype);
          console.log("user type added");
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return () => {
      return <div>error</div>
    };
  }, [token]);

  // const addUserType=()=>{
  //   if (usertype !== undefined && usertype !== null) {
  //     axios
  //       .post("http://54.169.208.124:9000/api/creategoogleuser", {
  //         token,
  //         usertype,
  //       })
  //       .then((res) => {
  //         localStorage.setItem("userType", usertype);
  //         console.log("user Added");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }

  // google login button response
  const responseGoogle = (response) => {
    if (response.accessToken) {
      console.log(response);

      localStorage.setItem("name", response.profileObj.name);
      localStorage.setItem("token", response.tokenId);
      console.log("name added");
      setName(response.profileObj.name);
      setToken(localStorage.getItem("token"));
    } else {
      console.log(response);
    }
  };

  //confirming the state of user
  if (token == null && usertype == null)
    //before login
    return (
      <GoogleLogin
        clientId="230577544545-dodqre3umhpuvvdc48j6lnar0tidiudh.apps.googleusercontent.com"
        buttonText="Google Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    );
  if (usertype)
    return (
      <div>
        Already logged
        <button
          onClick={() => {
            localStorage.clear();
            setToken(null);
            setUserType(null);
            setName(null);
          }}
        >
          Logout
        </button>
      </div>
    );
    
};
