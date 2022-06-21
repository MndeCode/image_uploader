// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ_0qWB6DMAGD-LF20UzbUk2HbkIFVdMg",
  authDomain: "image-uploader-5af99.firebaseapp.com",
  projectId: "image-uploader-5af99",
  storageBucket: "image-uploader-5af99.appspot.com",
  messagingSenderId: "482160946075",
  appId: "1:482160946075:web:5d67b39280d3b089a60f3e",
  measurementId: "G-BZZCQD80FE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);