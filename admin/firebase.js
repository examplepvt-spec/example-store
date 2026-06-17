// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "example-clothing.firebaseapp.com",
  projectId: "example-clothing",
  storageBucket: "example-clothing.firebasestorage.app",
  messagingSenderId: "365541402622",
  appId: "1:365541402622:web:129d716d298bb2de9342af"
};

const app = initializeApp(firebaseConfig);

console.log("Firebase Connected");
