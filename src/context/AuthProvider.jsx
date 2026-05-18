import React, { useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

// googleProvider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user);

  //SignIn With Google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // createUserWithEmailAndPassword
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signInWithEmailAndPassword
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

//   update Profile
const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData)
}

// forgot Password
const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
}

  // onAuthStateChanged withUseEffect
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  });
  const authInfo = {
    user,
    setUser,
    signUp,
    signIn,
    logOut,
    googleSignIn,
    loading,
    setLoading,
    updateUser,
    forgotPassword,
  };
  return (
    <div>
      <AuthContext value={authInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
