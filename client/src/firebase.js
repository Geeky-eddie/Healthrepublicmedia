// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "health-republic-media-1.firebaseapp.com",
  projectId: "health-republic-media-1",
  storageBucket: "health-republic-media-1.appspot.com",
  messagingSenderId: "1065841611482",
  appId: "1:1065841611482:web:d92c2a07732d8d73044be3"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);




