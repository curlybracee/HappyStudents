import React, { useState } from "react";
import axios from "axios";

function PostTesting() {
  const [username, setUsername] = useState("goo");
  const [password, setPassword] = useState("goop");
  const [token, setToken] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://54.169.208.124:9000/api/gettoken", { username, password })
      .then((res) => {
        setToken(res.data.data.token);
      })
      .catch((err) => {
        console.log(err);
        setToken("");
      });
  };

  const getAll = () => {
    axios
      .post("http://54.169.208.124:9000/api/getall", { token })
      .then((res) => console.log(res))
      .catch((err) => {console.log(err); setToken("")});
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="form-group d-flex flex-column">
          UserName :
          <input
            className="form-control"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          Password :
          <input
            type="text"
            className="form-control mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="d-flex ">
            <button
              className="btn btn-primary ml-5 mr-5"
              name="submitButton"
              type="submit"
            >
              Submit
            </button>
            <button className="btn btn-primary" onClick={getAll}>
              getAll
            </button>
          </div>
          <p className="overflow-hidden">{token}</p>
        </div>
      </form>
    
    </div>
  );
}

export default PostTesting;
