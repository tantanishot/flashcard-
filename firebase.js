import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDTqFdTyBEpvGSKXoSR0kks7FzPIpNsAXk",
    authDomain: "flashcard-saas-638bb.firebaseapp.com",
    projectId: "flashcard-saas-638bb",
    storageBucket: "flashcard-saas-638bb.appspot.com",
    messagingSenderId: "882595409416",
    appId: "1:882595409416:web:549b0fd447cfd519426bbd",
    measurementId: "G-4CTMBXH1P8"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
export default db;