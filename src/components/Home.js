import React, { useContext } from "react";
import { UserfContext } from "../context/userState";
import GoogleLogin from "react-google-login";
import FrstLogin from "./frstLogin";
import axios from "axios";

export const Home = () => {
  const { setName, token, setToken, usertype, setUserType } = useContext(
    UserfContext
  );

  axios
    .post("http://54.169.208.124:9000/api/getgoogletoken", {
      token,
      usertype,
    })
    .then((res) => {
      setUserType(res.data.data.usertype);
    }).catch((err)=>{
      console.log(err);
    })

  const responseGoogle = (response) => {
    if (response.accessToken) {
      setName(response.profileObj.name);
      setToken(response.tokenObj.id_token);
      console.log(response);

      localStorage.setItem("name", response.profileObj.name);
      localStorage.setItem("token", response.tokenObj.id_token);
    } else {
      console.log(response);
    }
  };

  if (token == null && usertype == null)
    return (
      <GoogleLogin
        clientId="230577544545-dodqre3umhpuvvdc48j6lnar0tidiudh.apps.googleusercontent.com"
        buttonText="Google Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    );
  else if (token !== null && usertype === null) return <FrstLogin />;
  else
    return (
      <div>
        Already logged
        <button
          onClick={() => {
            localStorage.clear();
            setToken(null);
            setUserType(null);
          }}
        >
          Logout
        </button>
      </div>
    );
};
