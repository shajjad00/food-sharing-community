// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration

console.log(import.meta.env.FIREBASE_AUTH_apiKey);
const firebaseConfig = {
  apiKey: "AIzaSyCv3CMWtUDuSiDrfSfsfyXgc2EFhiczrEM",
  authDomain: "password-auth-d7366.firebaseapp.com",
  projectId: "password-auth-d7366",
  storageBucket: "password-auth-d7366.appspot.com",
  messagingSenderId: "627909301105",
  appId: "1:627909301105:web:c14c2f603082103cd29cd0",
  //   apiKey: process.env.FIREBASE_AUTH_apiKey,
  //   authDomain: process.env.FIREBASE_AUTH_authDomain,
  //   projectId: process.env.FIREBASE_AUTH_projectId,
  //   storageBucket: process.env.FIREBASE_AUTH_storageBucket,
  //   messagingSenderId: process.env.FIREBASE_AUTH_messagingSenderId,
  //   appId: process.env.FIREBASE_AUTH_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
