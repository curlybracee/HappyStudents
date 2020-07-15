import { useState, useEffect, useCallback } from "react";
import Axios from "axios";
import useLocalStorage from "./useLocalStorage";
export default (url) => {
  const baseUrl = "https://54.169.208.124:9000/api";
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});
  const [token] = useLocalStorage("token");

  const doFetch = useCallback((options = {}) => {
    setOptions(options);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const requestOptions = {
      ...options,
      ...{
        token: `${token}` ? `${token}` : "",
      },
    };
    Axios(baseUrl + url, requestOptions)
      .then((res) => {
        console.log("res", res);
        setResponse(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("fetching error", err);
        setIsLoading(false);
        setError(err);
      });
  }, [isLoading, url, options, token]);

  return [{ isLoading, response, error }, doFetch];
};
