// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-aWxUTxkwyQxxsFNUQoMDzMtskfXFYSc",
  authDomain: "fir-auth-tutorial-50a27.firebaseapp.com",
  projectId: "fir-auth-tutorial-50a27",
  storageBucket: "fir-auth-tutorial-50a27.appspot.com",
  messagingSenderId: "753757373106",
  appId: "1:753757373106:web:2ace63c950a5b3b581ffab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
