// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLCyVeZktsEDVskZMEpc7FbGYO4l-lnLo",
  authDomain: "realtor-app-d10c7.firebaseapp.com",
  projectId: "realtor-app-d10c7",
  storageBucket: "realtor-app-d10c7.appspot.com",
  messagingSenderId: "818073764113",
  appId: "1:818073764113:web:cac71730bf28791ad68cb0",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
