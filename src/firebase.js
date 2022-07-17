// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkdq1j_JQbyQYGyHG5JKRs8xenYPaa00g",
  authDomain: "contact-a1a48.firebaseapp.com",
  databaseURL: "https://contact-a1a48-default-rtdb.firebaseio.com",
  projectId: "contact-a1a48",
  storageBucket: "contact-a1a48.appspot.com",
  messagingSenderId: "1062764796095",
  appId: "1:1062764796095:web:ecae518c99f353da8fce0a",
  measurementId: "G-RXBLLBCBXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);