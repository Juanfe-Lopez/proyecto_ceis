// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiOvdt3Xlvhggs6-HYQhgsMOAoYTzuIck",
  authDomain: "project-sis-49754.firebaseapp.com",
  projectId: "project-sis-49754",
  storageBucket: "project-sis-49754.appspot.com",
  messagingSenderId: "333081674755",
  appId: "1:333081674755:web:d228007297145bf422ba36",
  measurementId: "G-1R6NRCV0QL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
