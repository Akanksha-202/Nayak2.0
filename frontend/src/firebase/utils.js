import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC0clcWxDd1XNTXVTPUqRkjM6qvgIqWork",
    authDomain: "nayak-1b1b6.firebaseapp.com",
    projectId: "nayak-1b1b6",
    storageBucket: "nayak-1b1b6.appspot.com",
    messagingSenderId: "144086354921",
    appId: "1:144086354921:web:69ea54e0fea0400fb95978",
    measurementId: "G-40V4NQR1C9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };