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
import axios from "axios";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  console.log(document.cookies);

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
    setLoading(false);
    return signOut(auth);
  };

  //update profile

  const profileUpdate = (obj) => {
    setLoading(false);
    return updateProfile(auth.currentUser, obj);
  };

  //google login

  const googleLogIn = () => {
    setLoading(false);
    return signInWithPopup(auth, provider);
  };

  //watch user

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        axios
          .post(
            "https://food-sharing-community-server-three.vercel.app/jwt",
            loggedUser,
            {
              withCredentials: true,
            }
          )
          .then((data) => console.log("token response", data.data));
      } else {
        axios
          .post(
            "https://food-sharing-community-server-three.vercel.app/logout",
            loggedUser,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res.data);
          });
      }
    });
    return () => unsubscribe;
  }, [auth, user]);

  // user sign out

  const logOut = () => {
    setLoading(false);
    return signOut(auth);
  };

  // const checkTokenExpiration =()=>{
  //   const token = cook
  // }

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
