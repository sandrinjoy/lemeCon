import {initializeApp} from "firebase/app";
import "firebase/auth";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AuthProvider } from "./context/auth_cont";

const config={
    apiKey: "AIzaSyA1mlDnEvoEJgWJYW60O5B3pc8DYLklQYA",
    authDomain: "lemecon-98a6f.firebaseapp.com",
    projectId: "lemecon-98a6f",
    storageBucket: "lemecon-98a6f.appspot.com",
    messagingSenderId: "85078170134",
    appId: "1:85078170134:web:b54ea0f10668239e45b337"
  }; 

  const value=initializeApp(config);
  export const auth = getAuth(value);

  const provider = new GoogleAuthProvider();

  export const signInWithGoogle = () => {
    signInWithPopup(auth,provider).then((result) => {
      console.log(result)
      window.location.reload()
      // AuthProvider();
    }).catch((error) => {
      console.log(error);
      // alert("errt");
    });
  }
