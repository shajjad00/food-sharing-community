import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebasse.config";
import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  //create user

  const createUser = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //user sign in

  const signIn = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //user logOut

  const userLogOut = () => {
    return signOut(auth);
  };

  //update profile

  const profileUpdate = (obj) => {
    return updateProfile(auth.currentUser, obj);
  };

  //watch user

  const contextValue = {
    createUser,
    signIn,
    user,
    loading,
    userLogOut,
    profileUpdate,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
