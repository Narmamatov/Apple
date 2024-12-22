import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRBbD0cQzLsSbYqzNbtDQcMSLaC9Lu-FE",
  authDomain: "apple-b5247.firebaseapp.com",
  projectId: "apple-b5247",
  storageBucket: "apple-b5247.firebasestorage.app",
  messagingSenderId: "24670269697",
  appId: "1:24670269697:web:aaeefb78f2a342e134eb00",
  measurementId: "G-FEFBT4881D",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;