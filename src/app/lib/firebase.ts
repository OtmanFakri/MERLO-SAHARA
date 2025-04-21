import { initializeApp } from 'firebase/app';
import {firebaseConfig} from "@/app/config";
// import {getFirestore} from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const app = initializeApp({
//     apiKey: "AIzaSyDq2zvQhHe7tN86DjADKp_1JRc_9WuIFPM",
//     authDomain: "tracpay-dcbad.firebaseapp.com",
//     projectId: "tracpay-dcbad",
//     storageBucket: "tracpay-dcbad.firebasestorage.app",
//     messagingSenderId: "1010057215221",
//     appId: "1:1010057215221:web:bad4c0e4d5db194070d9bc"
// });

export default app;
