import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDB5kN4jfbLCx2QE-uwmy0BBgEKBK5u7LY",
  authDomain: "shopping-db-24c3e.firebaseapp.com",
  databaseURL: "https://shopping-db-24c3e.firebaseio.com",
  projectId: "shopping-db-24c3e",
  storageBucket: "shopping-db-24c3e.appspot.com",
  messagingSenderId: "358218381809",
  appId: "1:358218381809:web:25b448ee7c5b04f77d2c50",
  measurementId: "G-FS4MCDYCMD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
