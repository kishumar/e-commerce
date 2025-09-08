// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
authDomain: "logincart-de6b9.firebaseapp.com",
  projectId: "logincart-de6b9",
  storageBucket: "logincart-de6b9.firebasestorage.app",
  messagingSenderId: "602540060105",
  appId: "1:602540060105:web:6e54506a65152e2a44cc18"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider(app)

export {auth , provider}