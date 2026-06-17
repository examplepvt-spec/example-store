// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE4RSDLkGFclHv-90eCPZlwSCvaKr27Po",
  authDomain: "example-clothing.firebaseapp.com",
  projectId: "example-clothing",
  storageBucket: "example-clothing.firebasestorage.app",
  messagingSenderId: "365541402622",
  appId: "1:365541402622:web:129d716d298bb2de9342af",
  measurementId: "G-MQS6NQF4ZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
