// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
const firebaseConfig = {
    apiKey: "AIzaSyBIaEJTRJvL8gOjaHbFzDeSzs5O1aYLtbY",
    authDomain: "personal-project-1daba.firebaseapp.com",
    projectId: "personal-project-1daba",
    storageBucket: "personal-project-1daba.appspot.com",
    messagingSenderId: "387224361237",
    appId: "1:387224361237:web:d4b45657d1ccb2e5ccf11c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;