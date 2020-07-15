import React, { useContext } from "react";
import { UserfContext } from "../context/userState";

const Profile = () => {
  const [currentUserState] = useContext(UserfContext);
  return (
    <div>{currentUserState.currentUser && <div>happy to see you</div>}</div>
  );
};

export default Profile;
