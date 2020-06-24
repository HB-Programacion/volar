import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import Axios from 'axios'

const firebaseConfig = {
    apiKey: "AIzaSyC4kDzwW2Qbpi-LLoMWVpjzSM0kSSSV6LE",
    authDomain: "volar-web-18e43.firebaseapp.com",
    databaseURL: "https://volar-web-18e43.firebaseio.com",
    projectId: "volar-web-18e43",
    storageBucket: "volar-web-18e43.appspot.com",
    messagingSenderId: "353667435584",
    appId: "1:353667435584:web:6f99e2bb504a5993dea3a5",

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth,firebase, Axios }


