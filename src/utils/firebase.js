// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhPTnQQB5OFH-XCc_QD8EZzHFu8jFK6pA",
  authDomain: "netflickgpt.firebaseapp.com",
  projectId: "netflickgpt",
  storageBucket: "netflickgpt.appspot.com",
  messagingSenderId: "522568238015",
  appId: "1:522568238015:web:1df953c5f503047490d70a",
  measurementId: "G-ZQTF4FWEXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();