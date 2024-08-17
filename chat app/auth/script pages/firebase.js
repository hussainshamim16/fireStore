// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaHCFFXrpRNcOB-mz68ZVv_2BQf6fMQU8",
    authDomain: "bk-associate.firebaseapp.com",
    projectId: "bk-associate",
    storageBucket: "bk-associate.appspot.com",
    messagingSenderId: "396083023464",
    appId: "1:396083023464:web:c7a9060b694eaa99a275dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc
}