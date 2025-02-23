// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJlkTi5B5M8vylZQgXQ9O0qbIlDBChh5c",
  authDomain: "netflixgpt-72698.firebaseapp.com",
  projectId: "netflixgpt-72698",
  storageBucket: "netflixgpt-72698.firebasestorage.app",
  messagingSenderId: "596142544128",
  appId: "1:596142544128:web:c147e4adb8a61c80ee4fe5",
  measurementId: "G-35FQCYWBXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();