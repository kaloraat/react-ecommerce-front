// import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";

// google account > mas*******ter@gmail.com
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOFk-WVHCvlONVuo-K5sq9KPo7CYjLd_Q",
  authDomain: "node-react-28716.firebaseapp.com",
  databaseURL: "https://node-react-28716.firebaseio.com",
  projectId: "node-react-28716",
  storageBucket: "node-react-28716.appspot.com",
  messagingSenderId: "722018152456",
  appId: "1:722018152456:web:ff425680d7e93e1e0121bd",
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
