import React, { createContext, useReducer } from "react";

//initial State
const initialState = {
  isLoading: false,
  isLoggedIn: false,
  isNewUser: null,
  currentUser: null,
};
//Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "NEW_USER":
      return {
        ...state,
        isNewUser: true,
        isLoggedIn: true,
      };
    case "SET_AUTHORIZED":
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        isNewUser: false,
        token: action.token,
        currentUser: action.payload,
      };
    case "SET_UNAUTHORIZED":
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        token: null,
        isNewUser: null,
        currentUser: null,
      };
    default:
      return state;
  }
};

//Create Context
export const UserfContext = createContext();

//Provider Component
export const UserProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return (
    <UserfContext.Provider value={value}>{children}</UserfContext.Provider>
  );
};
