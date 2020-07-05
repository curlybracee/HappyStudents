import React from "react";
import { UserfContext } from "../context/userState";
import { useContext } from "react";
import GoogleLogin from 'react-google-login'
export const Header = () => {
  const { userLoging, isToken } = useContext(UserfContext);
  const responseGoogle=(response)=>{
    console.log(response);
    
  }

  return (
    <div className="header-container">
      <h1>
       HappyStudents
      </h1>
      <div className="searchBar">
        <form>
          <input
            type="text"
            className="searchInput"
            placeholder="Search Course"
          />
        </form>
      </div>
      <GoogleLogin
          clientId="230577544545-c65p7g6jqg33p8rqntbc645rn200c69h.apps.googleusercontent.com"
          buttonText="Google Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          />
    </div>
  );
};
