import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAI4sQUJBlnxMyk_cMEIqXUwRkAk8DMwQw",
  authDomain: "react-netflix-clone-f1418.firebaseapp.com",
  projectId: "react-netflix-clone-f1418",
  storageBucket: "react-netflix-clone-f1418.appspot.com",
  messagingSenderId: "137373440034",
  appId: "1:137373440034:web:64992d087a4d8ad0ead27b",
  measurementId: "G-V9FJHZHNKB"
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);