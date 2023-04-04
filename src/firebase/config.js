// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFylIeb7pIl4lYCw9_XI1tGkzDEEPJMB0",
  authDomain: "react-cursos-cdf7a.firebaseapp.com",
  projectId: "react-cursos-cdf7a",
  storageBucket: "react-cursos-cdf7a.appspot.com",
  messagingSenderId: "320653719620",
  appId: "1:320653719620:web:95406c2b519ddd96b56411"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore(  FirebaseApp )