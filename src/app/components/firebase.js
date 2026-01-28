// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB08USFdX7lwW7cOYc1uB313o4DDY1vU5U",
  authDomain: "linkly-7fc69.firebaseapp.com",
  projectId: "linkly-7fc69",
  storageBucket: "linkly-7fc69.firebasestorage.app",
  messagingSenderId: "515133126831",
  appId: "1:515133126831:web:c075961352968c6dd5fc5a",
  measurementId: "G-SXDLSQ35K0"
};

// Initialize Firebase
export const auth = getAuth();
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);