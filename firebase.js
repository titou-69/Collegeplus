// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl5RrCiNN_-YekH6JZfCKdM-3hPhofioU",
  authDomain: "collegeplus-702a7.firebaseapp.com",
  projectId: "collegeplus-702a7",
  storageBucket: "collegeplus-702a7.firebasestorage.app",
  messagingSenderId: "402441657395",
  appId: "1:402441657395:web:c0620e7d2b309524b25746",
  measurementId: "G-6F30S3PLKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
