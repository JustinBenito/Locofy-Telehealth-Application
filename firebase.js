// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhaxRoE_68XQMfuV4t_GqjNcJmX1eDB68",
  authDomain: "locofy-telehealth-app.firebaseapp.com",
  projectId: "locofy-telehealth-app",
  storageBucket: "locofy-telehealth-app.appspot.com",
  messagingSenderId: "819221090122",
  appId: "1:819221090122:web:e280ed162ec96a21c57bb3"
};

initializeApp(firebaseConfig);

export const db=getFirestore();
export const auth=getAuth();