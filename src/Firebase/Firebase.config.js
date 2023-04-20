// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOdr9laNu1iNoHskyJ-5PVgvay1GDkde4",
  authDomain: "dragon-news-route.firebaseapp.com",
  projectId: "dragon-news-route",
  storageBucket: "dragon-news-route.appspot.com",
  messagingSenderId: "443655852679",
  appId: "1:443655852679:web:9fb67f7c7ff498ee605e22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;