// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYhUCycvxAVZUTM5BKOb64FcpqLW2XPng",
  authDomain: "job-apllication-managment.firebaseapp.com",
  projectId: "job-apllication-managment",
  storageBucket: "job-apllication-managment.appspot.com",
  messagingSenderId: "925216978521",
  appId: "1:925216978521:web:9294f5af924dcda9c4a348",
  measurementId: "G-TDJF4JZWYY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
