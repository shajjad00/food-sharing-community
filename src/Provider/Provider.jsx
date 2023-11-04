import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import app from "../Firebase/firebasse.config";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
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

  //google login

  const googleLogIn = () => {
    return signInWithPopup(auth, provider);
  };

  //watch user

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe;
  }, [auth]);

  // user sign out

  const logOut = () => {
    return signOut(auth);
  };
  const contextValue = {
    createUser,
    signIn,
    user,
    loading,
    userLogOut,
    profileUpdate,
    logOut,
    googleLogIn,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
