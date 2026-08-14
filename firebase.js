import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDcyycALwJZ1pRqsL4M90lfIibnrjsC5gQ",
    authDomain: "ashwini-friends.firebaseapp.com",
    projectId: "ashwini-friends",
    storageBucket: "ashwini-friends.firebasestorage.app",
    messagingSenderId: "50308492533",
    appId: "1:50308492533:web:a0bbb1ab0976154bbf69bc"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };