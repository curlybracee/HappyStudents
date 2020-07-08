import React, { useContext } from "react";
import axios from "axios";
import { UserfContext } from "../context/userState";

const FrstLogin = () => {
  const { name, token, usertype, setUserType } = useContext(
    UserfContext
  );

  const handleChange = (e) => {
    setUserType(e.target.value);
  };
  const userSelect = (e) => {
    e.preventDefault();
    console.log(usertype);
    axios
      .post("http://54.169.208.124:9000/api/getgoogletoken", {
        token,
        usertype,
      })
      .then((res) => {
        console.log(res);
        let usert = res.data.data.userinfo.usertype;
        localStorage.setItem("userType", usert);
        setUserType(usert);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {name}
      <form onSubmit={userSelect}>
        <select id="userType" value={usertype} onChange={handleChange}>
          <option value="Student" id="student">
            Student
          </option>
          <option value="teacher" id="teacher">
            Teacher
          </option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FrstLogin;
