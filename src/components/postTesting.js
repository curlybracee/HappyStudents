import React, { useState } from "react";
import axios from "axios";
import {useHistory
} from "react-router-dom";

function PostTesting() {
  const [username, setUsername] = useState("goo");
  const [password, setPassword] = useState("goop");
  const [token, setToken] = useState("");
  let history=useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://54.169.208.124:9000/api/gettoken", { username, password })
      .then((res) => {
        setToken(res.data.data.token);
        localStorage.setItem("token",res.data.data.token);
        history.push("/home");
      })
      .catch((err) => {
        console.log(err);
        setToken("");
      });
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
              className="btn btn-light  ml-5 mr-5"
              name="submitButton"
              type="submit"
            >
              Submit
            </button>
          </div>
          <p className="overflow-hidden">{token}</p>
        </div>

      </form>
     
</div>
    
  );
}

export default PostTesting;
