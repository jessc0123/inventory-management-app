// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkP0YO7UoLXScI-u8t6nXp1797GFfrdeA",
  authDomain: "inventory-management-5c18a.firebaseapp.com",
  projectId: "inventory-management-5c18a",
  storageBucket: "inventory-management-5c18a.appspot.com",
  messagingSenderId: "410751523934",
  appId: "1:410751523934:web:dbb3019487a2c79589e8cf",
  measurementId: "G-DJBK49PWEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {firestore}