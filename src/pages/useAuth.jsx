// useAuth.jsx

import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAGx1HnVY4eA6B8cKsorTXjMzYsAm9TOpQ",
  authDomain: "react-426909.firebaseapp.com",
  projectId: "react-426909",
  storageBucket: "react-426909.appspot.com",
  messagingSenderId: "215629017107",
  appId: "1:215629017107:web:5429293a26a435b1954fe6",
  measurementId: "G-KRK4XS9H0D"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  return { user, signIn, signOut: signOutUser };
};

export { useAuth };
