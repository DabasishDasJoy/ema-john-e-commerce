import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { createContext, useState } from "react";
import app from "../Hooks/firebase.config.init";
export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { user, createUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
