// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcRL9IHPPk97RXLnZyBnpzXcZHKsRi3bk",
  authDomain: "toy-universe-37ba3.firebaseapp.com",
  projectId: "toy-universe-37ba3",
  storageBucket: "toy-universe-37ba3.firebasestorage.app",
  messagingSenderId: "934251493621",
  appId: "1:934251493621:web:36e92dfe698ef781c1edbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);