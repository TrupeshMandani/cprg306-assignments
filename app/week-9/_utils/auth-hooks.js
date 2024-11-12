// auth-hooks.js
"use client";

import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "./firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const gitHubSignIn = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        return result;
      })
      .catch((error) => {
        console.error("GitHub sign-in error:", error);
        throw error; // rethrow for handling in components
      });
  };

  const firebaseSignOut = () => {
    return signOut(auth)
      .then(() => setUser(null))
      .catch((error) => {
        console.error("Sign-out error:", error);
        throw error;
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []); // Removed user dependency to avoid reruns

  return (
    <AuthContext.Provider value={{ user, gitHubSignIn, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(AuthContext);
};
