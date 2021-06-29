import React from 'react'
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDex0tCrk9yx54JWX0tNv2JlIQvnClCE0I",
    authDomain: "whatsapp-d73a4.firebaseapp.com",
    projectId: "whatsapp-d73a4",
    storageBucket: "whatsapp-d73a4.appspot.com",
    messagingSenderId: "235419034497",
    appId: "1:235419034497:web:f08195cfbd21bc86bdfe80",
    measurementId: "G-4E5T7P1C20"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
