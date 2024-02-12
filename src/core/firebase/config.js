// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAm34pfCKk1N_c0QOZl4nwKuhXCCO2UNDA",
    authDomain: "capital-tech-fintech.firebaseapp.com",
    projectId: "capital-tech-fintech",
    storageBucket: "capital-tech-fintech.appspot.com",
    messagingSenderId: "729233128912",
    appId: "1:729233128912:web:d1d29421a782376c5d4dd5",
    measurementId: "G-HQSJK1S1FM"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

