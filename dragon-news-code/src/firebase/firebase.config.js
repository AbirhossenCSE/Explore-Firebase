// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRR321gtvLFcZ4IlcGmoBG524kP3H_PIs",
  authDomain: "dragon-news-eae08.firebaseapp.com",
  projectId: "dragon-news-eae08",
  storageBucket: "dragon-news-eae08.firebasestorage.app",
  messagingSenderId: "206647382813",
  appId: "1:206647382813:web:2d6fef77c69278f3a987f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;