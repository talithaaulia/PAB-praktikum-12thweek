import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyDWfnem6UdUXQ6CJlgKJ49ANfd_An6nENQ",
  authDomain: "th-week-644cf.firebaseapp.com",
  databaseURL: "https://th-week-644cf-default-rtdb.firebaseio.com",
  projectId: "th-week-644cf",
  storageBucket: "th-week-644cf.appspot.com",
  messagingSenderId: "65027537062",
  appId: "1:65027537062:web:f6bda23b47bc90e1f75c67"
});

const FIREBASE = firebase;

export default FIREBASE;

