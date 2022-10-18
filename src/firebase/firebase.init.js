// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFFXyLgcrMrj3egxFQVKMxQ7lRDqCgR7w",
  authDomain: "email-password-auth-d03a1.firebaseapp.com",
  projectId: "email-password-auth-d03a1",
  storageBucket: "email-password-auth-d03a1.appspot.com",
  messagingSenderId: "589847886222",
  appId: "1:589847886222:web:15af6697eb9de008a7ccdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;