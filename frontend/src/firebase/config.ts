// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUsP9PzhXT7UVqt7ANB6SJjdoX8ytHZnU",
  authDomain: "gallery-react-614fd.firebaseapp.com",
  projectId: "gallery-react-614fd",
  storageBucket: "gallery-react-614fd.appspot.com",
  messagingSenderId: "662870341126",
  appId: "1:662870341126:web:996c655aedbb4ef99e7587"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}