import { autocompleteClasses } from "@mui/material";
import React, { createContext, useContext, useReducer } from "react";
import { auth } from "../../FireBase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const initialState = {
  auth: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, user: action.payload };
    case "GET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const ggoleProvider = new GoogleAuthProvider()

  async function register(email, password, name, surName) {
    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        name,
        surName
      );
    } catch (error) {
      dispatch({
        type: "GET_ERROR",
        payload: error.message,
      });
    }
  }
  async function signIn(params) {
    
  }

  const values = {
    register,
    error: state.error,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
