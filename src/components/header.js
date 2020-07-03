import React from "react";
import { UserfContext } from "../context/userState";
import { useContext } from "react";

export const Header = () => {
  const { userLoging, isToken } = useContext(UserfContext);

  const userStatus = isToken ? "Logout" : "Login";

  return (
    <div className="d-flex justify-content-between">
      <h1>
        <a href="/home"> happyStudents</a>
      </h1>
      <div className="m-2 w-75">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Search Course"
          />
        </form>
      </div>
      <button className="btn btn-primary m-2 ml-auto" onClick={userLoging}>
        {userStatus}
      </button>
    </div>
  );
};
