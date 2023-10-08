// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWuSQ4K558Cet0R5XxhONtqAPKOKVvPlA",
  authDomain: "react-cpazd-eventmgt.firebaseapp.com",
  projectId: "react-cpazd-eventmgt",
  storageBucket: "react-cpazd-eventmgt.appspot.com",
  messagingSenderId: "564448048686",
  appId: "1:564448048686:web:bd6c62353daa59bf1991bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;