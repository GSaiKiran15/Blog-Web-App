import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBadibVc6H2KRVO4-TqgmZv6DXUumvJn88",
  authDomain: "pern-blog-c5710.firebaseapp.com",
  projectId: "pern-blog-c5710",
  storageBucket: "pern-blog-c5710.firebasestorage.app",
  messagingSenderId: "949115549778",
  appId: "1:949115549778:web:4f46fa42cba8637c5e078b",
  measurementId: "G-3R00RQP4M8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
