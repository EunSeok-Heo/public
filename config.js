// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCag6uTu01u1-99WB1nErf2hQbazA4V1lU",
  authDomain: "kimp-ro.firebaseapp.com",
  projectId: "kimp-ro",
  storageBucket: "kimp-ro.appspot.com",
  messagingSenderId: "354623648716",
  appId: "1:354623648716:web:5d0f1297655f1d8e56a369",
  measurementId: "G-J84ZRX5200"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);