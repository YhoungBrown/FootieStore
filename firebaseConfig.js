import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8tDXJ6PlLu-YubDR834kAZpR0xo2x94U",
    authDomain: "footiestore-5ee76.firebaseapp.com",
    projectId: "footiestore-5ee76",
    storageBucket: "footiestore-5ee76.appspot.com",
    messagingSenderId: "34893013800",
    appId: "1:34893013800:web:4a4339913789e51ea9261d",
    measurementId: "G-0BYFS75DSJ"
  };



// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db}