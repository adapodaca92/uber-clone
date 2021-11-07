// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZZLg819KtRVGlCXRuIq1KtBowhAkBNqU",
  authDomain: "uber-next-clone-live-aabaa.firebaseapp.com",
  projectId: "uber-next-clone-live-aabaa",
  storageBucket: "uber-next-clone-live-aabaa.appspot.com",
  messagingSenderId: "904107078165",
  appId: "1:904107078165:web:bbf7dd9a17b10940d9541c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
