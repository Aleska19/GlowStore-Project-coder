// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlonQ46OZXFzux-GvoTRsYVrVi6y6FH_s",
  authDomain: "glowstore-e-commerce.firebaseapp.com",
  projectId: "glowstore-e-commerce",
  storageBucket: "glowstore-e-commerce.firebasestorage.app",
  messagingSenderId: "55555914869",
  appId: "1:55555914869:web:8d030bad6d57cf6ceb4c3c",
  measurementId: "G-60Y07W880N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);