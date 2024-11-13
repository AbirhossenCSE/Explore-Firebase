// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// donot share config in bublic
const firebaseConfig = {
  apiKey: "AIzaSyAPEItPmVa2-tB1f3mGn-f-gZhs5xlYZ4E",
  authDomain: "email-password-auth-96f3c.firebaseapp.com",
  projectId: "email-password-auth-96f3c",
  storageBucket: "email-password-auth-96f3c.firebasestorage.app",
  messagingSenderId: "616566905367",
  appId: "1:616566905367:web:a61d6af1ee61dad775da52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
