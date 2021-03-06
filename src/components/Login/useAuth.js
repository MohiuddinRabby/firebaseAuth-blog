import React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebaseConfig";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import {  Route, Redirect } from "react-router-dom";

firebase.initializeApp(firebaseConfig);
const AuthContext = createContext();
export const AuthContextProvider = (props) => {
  const auth = Auth();
  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
//private route auth purpose
export const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
const getUser = (user) => {
  const { displayName, email, photoURL } = user;
  return {
    name: displayName,
    mail: email,
    photo: photoURL,
  };
};
const Auth = () => {
  const [user, setUser] = useState(null);
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const signedInUser = getUser(res.user);
        setUser(signedInUser);
        //res
        //user is from api
        console.log(res.user);
        return res.user;
      })
      .catch((error) => {
        //error
        setUser(null);
        return error.message;
      });
  };
  const signOutWithGoogle = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        // Sign-out successful.
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        const currUser = getUser(user);
        // console.log("use rffec", user);
        setUser(currUser);
      } else {
        // No user is signed in.
      }
    });
  }, []);
  return {
    user,
    signInWithGoogle,
    signOutWithGoogle,
  };
};
export default Auth;
