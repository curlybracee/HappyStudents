import React, { useContext, useEffect, useState } from "react";
import { UserfContext } from "../context/userState";
import GoogleLogin from "react-google-login";
import FrstLogin from "./frstLogin";
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
          console.log("usertype:" + usertype);
        })
        .catch((err) => {
          setLoginState(<FrstLogin />);
          console.log(err);
        });

       

    }

    

    return () => {};
  },[token]);


const addUserType=()=>{
  if (usertype !== undefined && usertype !== null) {
    axios
      .post("http://54.169.208.124:9000/api/creategoogleuser", {
        token,
        usertype,
      })
      .then((res) => {
        localStorage.setItem("userType", usertype);
        console.log("user Added");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

  // google login button response
  const responseGoogle = (response) => {
    if (response.accessToken) {
      console.log(response);

      localStorage.setItem("name", response.profileObj.name);
      localStorage.setItem("token", response.tokenId);
      setToken(localStorage.getItem("token"));
      setName(response.profileObj.name);
      console.log("google token" + token);
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
  if (token !== null && usertype !== null)
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
  if (usertype === null){
    return <FrstLogin/>;
    addUserType();
  }
  
};
