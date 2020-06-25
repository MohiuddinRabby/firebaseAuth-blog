import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebaseConfig";

firebase.initializeApp(firebaseConfig);
const Auth = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const signInWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        //res
        return res.user;
      })
      .catch((error) => {
        //error
        return error.message;
      });
  };
  return {
    signInWithGoogle,
  };
};
export default Auth;
