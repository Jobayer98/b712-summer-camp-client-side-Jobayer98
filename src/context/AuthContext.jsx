/* eslint-disable no-unused-vars */
import React from "react";

const AuthContext = React.createContext({
  user: null,
  role: "",
  setRole: () => {},
  loading: false,
  login: (email, password) => {},
  logout: () => {},
  createUser: (email, password) => {},
  loginWithGoogle: () => {},
  loginWithFacebook: () => {},
  loginWithGithub: () => {},
});

export default AuthContext;
