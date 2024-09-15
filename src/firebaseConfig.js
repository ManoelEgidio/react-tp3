import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDUI1AfYzaMQQDNTrHiu8nQiVvNSRGGvg4",
    authDomain: "tp3-react-92ab4.firebaseapp.com",
    projectId: "tp3-react-92ab4",
    storageBucket: "tp3-react-92ab4.appspot.com",
    messagingSenderId: "472474210687",
    appId: "1:472474210687:web:ee29fac9da5ee8b0b1ca4a",
    measurementId: "G-EC3TS4K4VH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
