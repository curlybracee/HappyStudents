import React from "react";
import { UserfContext } from "../context/userState";
import { useContext } from "react";
import GoogleLogin from 'react-google-login'
export const Header = () => {
  const { userLoging, isToken,name,setName } = useContext(UserfContext);


  const responseGoogle=(response)=>{
    
    setName(response.profileObj.name);
    localStorage.setItem("name",response.profileObj.name);

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
      {name?name:<GoogleLogin
          clientId="230577544545-8abl4956ddkul6bpjsrfor7dq8bsu2ue.apps.googleusercontent.com"
          buttonText="Google Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          />}
    </div>
  );
};
