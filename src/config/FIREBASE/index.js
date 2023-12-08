import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  // COPAS CONFIG DARI FIREBASE 
  // MULAI  apiKey SAMPE appId
});

const FIREBASE = firebase;

export default FIREBASE;

