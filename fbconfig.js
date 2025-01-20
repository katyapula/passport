// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getDatabase, ref } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const fbconfig = {
  apiKey: "AIzaSyB6ByAnytCj9hrSvyiP6l7SE680mqVKiog",

  authDomain: "passport-d1a0d.firebaseapp.com",

  projectId: "passport-d1a0d",

  storageBucket: "passport-d1a0d.firebasestorage.app",

  messagingSenderId: "16359100729",

  appId: "1:16359100729:web:c4b94b5cc8e10b627958e8",

  measurementId: "G-X37YQQLJJG",

  databaseURL: "https://passport-d1a0d-default-rtdb.firebaseio.com",
};

// Initialize Firebase

const app = initializeApp(fbconfig);
export const database = getDatabase(app);
