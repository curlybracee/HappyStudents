import { useEffect, useContext } from "react";
import { UserfContext } from "../context/userState";
import useLocalStorage from "../hooks/useLocalStorage";
import Axios from "axios";

const CurrentUserChecker = ({ children }) => {
  const [, dispatch] = useContext(UserfContext);
//checking local storage for token
  const [token] = useLocalStorage("token");

  useEffect(() => {
    if (!token) {
      dispatch({
        type: "SET_UNAUTHORIZED",
      });
      return;
    }
//if there is a token sends api request
    Axios.post("http://54.169.208.124:9000/api/getgoogletoken", { token })
      .then((res) => {
        if (res.data.msg !== "user not exist") {
          dispatch({
            type: "SET_AUTHORIZED",
            token: res.data.data.token,
            payload: res.data.data.userinfo,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch, token]);
  return children;
};
export default CurrentUserChecker;
