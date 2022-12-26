// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARj2Bt2MSvwLhGS7LFMQAPAwe14Ea8U8E",
  authDomain: "blog-plaza.firebaseapp.com",
  projectId: "blog-plaza",
  storageBucket: "blog-plaza.appspot.com",
  messagingSenderId: "180561392369",
  appId: "1:180561392369:web:a9a2ca253cd83b3883ef50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
