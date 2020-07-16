import React, { useContext } from "react";
import { UserfContext } from "../context/userState";
import { Redirect } from "react-router-dom";

const Profile = () => {
  const [currentUserState] = useContext(UserfContext);

  if (!currentUserState.isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div>{currentUserState.currentUser && <div>happy to see you</div>}</div>
  );
};

export default Profile;
