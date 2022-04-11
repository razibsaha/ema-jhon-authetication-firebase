// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqWDoI8z12nbZEyusCjx9TOlP86QMMgxQ",
  authDomain: "ema-jhon-simple-a9159.firebaseapp.com",
  projectId: "ema-jhon-simple-a9159",
  storageBucket: "ema-jhon-simple-a9159.appspot.com",
  messagingSenderId: "672929386711",
  appId: "1:672929386711:web:900dea318be10cba3fe092"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;