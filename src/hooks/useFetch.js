import { useState, useEffect, useCallback } from "react";
import Axios from "axios";
import useLocalStorage from "./useLocalStorage";

export default (url) => {
  const baseUrl = "https://happys-server.herokuapp.com/api";

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
    let skipGetResponseAfterDestroy = false;
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
        if (!skipGetResponseAfterDestroy) {
          setResponse(res.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (!skipGetResponseAfterDestroy) {
          setIsLoading(false);
          setError(err);
        }
      });
    return () => {
      skipGetResponseAfterDestroy = true;
    };
  }, [isLoading, url, options, token]);

  return [{ isLoading, response, error }, doFetch];
};
