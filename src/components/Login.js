import React, { useState, useContext } from "react";
import axios from "axios";
import { UserfContext } from "../context/userState";

export const Login = () => {
  const { isToken, setIsToken } = useContext(UserfContext);
  const [username, setUsername] = useState("goo");
  const [password, setPassword] = useState("goop");

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://54.169.208.124:9000/api/gettoken", { username, password })
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        setIsToken(!isToken);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (!isToken) {
    return (
      <div className="">
        <form onSubmit={onSubmit} className="userLogin ml-3">
          <h2>login</h2>
          <label>Username</label>
          <input
            className="loginInput mb-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
          />
          <label>Password</label>
          <input
            className="loginInput mb-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button className="loginButton mx-auto" type="submit">Submit</button>
        </form>
      </div>
    );
  }
};
