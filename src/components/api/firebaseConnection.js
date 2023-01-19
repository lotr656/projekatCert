// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_wGkNihLZ6bxnhuoWMNd1uVZZPfLIL54",
  authDomain: "certprojekat.firebaseapp.com",
  databaseURL:
    "https://certprojekat-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "certprojekat",
  storageBucket: "certprojekat.appspot.com",
  messagingSenderId: "33238069594",
  appId: "1:33238069594:web:e47e6f2a0ed86f308bc363",
  measurementId: "G-G03GL5FT2B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
