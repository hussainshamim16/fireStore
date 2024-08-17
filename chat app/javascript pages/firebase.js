

// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getStorage ,ref,uploadBytes,getDownloadURL} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js"
//  import { initializeApp ,getApp} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAa7vWwxo3TbvQXj5KRlitAyMPbuLs2Exw",
    authDomain: "signup-signin-hs.firebaseapp.com",
    projectId: "signup-signin-hs",
    storageBucket: "signup-signin-hs.appspot.com",
    messagingSenderId: "527260808941",
    appId: "1:527260808941:web:b4efe98e836bc1c29b7ee4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Get a non-default Storage bucket
const firebaseApp = getApp();
const storage = getStorage(firebaseApp, "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js");


export {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    setDoc,
    doc,
    getDoc,
    db,
    getStorage,
    storage
    ,ref
    ,uploadBytes
    ,getDownloadURL
}