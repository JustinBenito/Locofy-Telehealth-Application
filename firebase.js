// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArfG10tyxb6Uu6DsQXRFvPID7mQkSapdg",
  authDomain: "telehealth-48dbc.firebaseapp.com",
  projectId: "telehealth-48dbc",
  storageBucket: "telehealth-48dbc.appspot.com",
  messagingSenderId: "329557416582",
  appId: "1:329557416582:web:0e2ae5c083098090388f07"
};

initializeApp(firebaseConfig);


export const auth=getAuth();