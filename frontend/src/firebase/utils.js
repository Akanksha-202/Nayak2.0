import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey:"AIzaSyC-ZWrvqcBGDsOwr85yo2_mTsnFhnSOo0E",
    authDomain:"nayak-c9481.firebaseapp.com",
    projectId:"nayak-c9481",
    storageBucket:"nayak-c9481.appspot.com",
    messagingSenderId:"354131726624",
    appId:"1:54131726624:web:55a64c7011d2d169175f45",
    measurementId:"G-EP7MGN8JZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {app, db, storage};