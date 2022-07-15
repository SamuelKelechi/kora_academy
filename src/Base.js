import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAc5v507t-IvXoTVgX8qlPTOafifrEDoZA",
    authDomain: "kora-academy.firebaseapp.com",
    projectId: "kora-academy",
    storageBucket: "kora-academy.appspot.com",
    messagingSenderId: "147018187195",
    appId: "1:147018187195:web:dd8e54f73f2f791913049e"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);