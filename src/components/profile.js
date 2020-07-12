import React, { useContext } from "react";
import { UserfContext } from "../context/userState";

const Profile = () => {
  const [currentUserState, setCurrentUserState] = useContext(UserfContext);

  const logOut = () => {
    localStorage.clear();
    setCurrentUserState({
      isLoggedIn: null,
      currentUser: null,
    });
    window.location.reload(true);
  };
  return (
    <div>
      {currentUserState.currentUser && (
        <div>
          happy to see you,{currentUserState.currentUser.name}
          <div>
            Already logged
            <button onClick={logOut}>Logout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
