import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPyfbJmOsQ9LgYhUei46408ecuvTtXngA",
  authDomain: "mail-password-auth-aa3db.firebaseapp.com",
  projectId: "mail-password-auth-aa3db",
  storageBucket: "mail-password-auth-aa3db.firebasestorage.app",
  messagingSenderId: "628920661849",
  appId: "1:628920661849:web:a2196a59b8f6f0b1babe48"
};

// APIKEY=AIzaSyAPyfbJmOsQ9LgYhUei46408ecuvTtXngA
// AUTHDOMAIN=mail-password-auth-aa3db.firebaseapp.com
// PROJECTID=mail-password-auth-aa3db
// STORAGEBUCKET=mail-password-auth-aa3db.firebasestorage.app
// MESSAGINGSENDERID=628920661849
// APPID


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
