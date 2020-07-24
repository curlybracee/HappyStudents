import React, { useContext } from "react";
import { UserfContext } from "../context/userState";
import { Redirect } from "react-router-dom";
import VideoBox from './videoBox'
const Profile = () => {
  const [currentUserState] = useContext(UserfContext);

  if (!currentUserState.isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (<>
      {currentUserState.currentUser.usertype}
      <p>Welcome to happyStudents</p>
        <p>what you like to teach today ??
      </p>
      <div className='courseList'>
        <div className='videoBox'>
          <div className='courseBox tutView'>
            JavaScript
          </div>
          <div className='courseBox tutView'>
            Node
          </div>
          <div className='courseBox tutView'>
            Python
          </div>
          <div className='courseBox tutView'>
            Kodular
          </div>
          <div className='courseBox tutView'>
            React
          </div>
          <div className='courseBox tutView'>
            deno
          </div>
        </div>
      </div>
      {/* <VideoBox/> */}
   </>
  );
};

export default Profile;
