// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4Q42bNUsmzre3BDFBMx2kSyl-nbbrx7Y",
  authDomain: "netflixgpt-569ec.firebaseapp.com",
  projectId: "netflixgpt-569ec",
  storageBucket: "netflixgpt-569ec.appspot.com",
  messagingSenderId: "436482151038",
  appId: "1:436482151038:web:04a2607bb5412ef7cc7e2f",
  measurementId: "G-STF5SSKMZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();