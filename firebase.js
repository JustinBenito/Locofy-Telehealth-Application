// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOURAPIKEY",
  authDomain: "YOURAPIKEY",
  projectId: "YOURAPIKEY",
  storageBucket: "YOURAPIKEY",
  messagingSenderId: "YOURAPIKEY",
  appId: "YOURAPIKEY"
};

initializeApp(firebaseConfig);

export const db=getFirestore();
export const auth=getAuth();