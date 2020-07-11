import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import useFetch from "../hooks/useFetch";
import useLocalStorage from "../hooks/useLocalStorage";

export const Home = () => {
  // destructuring states from gloabal state
  const apiUrl = "/getgoogletoken";
  const [{ response }, doFetch] = useFetch(apiUrl);
  const [token, setToken] = useLocalStorage("token");

  useEffect(() => {
    if (!response) {
      return;
    }
    doFetch({
      data: {
        token
      },
    });
  }, [response, setToken, doFetch, token]);

  // google login button response
  const responseGoogle = (response) => {
    if (response.accessToken) {
      let tempToken = response.tokenId;
      setToken(tempToken);
      doFetch({
        method: "post",
        data: {
          token: tempToken,
        },
      });
    } else {
      console.log(response);
    }
  };


  return (
    <div>
      {!token && (
        <GoogleLogin
          clientId="230577544545-dodqre3umhpuvvdc48j6lnar0tidiudh.apps.googleusercontent.com"
          buttonText="Google Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      )}

      {token && (
        <div>
          happy to see youu
          <div>
            Already logged
            <button
              onClick={() => {
                setToken(null);
              }}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
