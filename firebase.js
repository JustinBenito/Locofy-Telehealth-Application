// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbFW7aqCpAV_TnoMURj9ugHvc9jNCw6To",
  authDomain: "speech-lab-152be.firebaseapp.com",
  projectId: "speech-lab-152be",
  storageBucket: "speech-lab-152be.appspot.com",
  messagingSenderId: "28503829891",
  appId: "1:28503829891:web:9452c0c083f76b6017dab6",
  measurementId: "G-3ZY38HX4PP"
};

initializeApp(firebaseConfig);

export const db=getFirestore();
export const auth=getAuth();