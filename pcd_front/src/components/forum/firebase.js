// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from "firebase/auth";
import {getFirestore}from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7Z7DRdTUrOuFVsC47ANHtUc0gVmjv2Pg",
  authDomain: "chatapp-77af1.firebaseapp.com",
  projectId: "chatapp-77af1",
  storageBucket: "chatapp-77af1.firebasestorage.app",
  messagingSenderId: "428953212374",
  appId: "1:428953212374:web:f09d65c0a8c35ae517c077"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);