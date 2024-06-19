// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, ProviderId, signInWithPopup, signOut } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGx1HnVY4eA6B8cKsorTXjMzYsAm9TOpQ",
  authDomain: "react-426909.firebaseapp.com",
  projectId: "react-426909",
  storageBucket: "react-426909.appspot.com",
  messagingSenderId: "215629017107",
  appId: "1:215629017107:web:5429293a26a435b1954fe6",
  measurementId: "G-KRK4XS9H0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { auth, provider, signInWithPopup, signOut, analytics };
