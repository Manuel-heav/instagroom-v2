import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDZz289uv34KPtxUp1g4fJurZQehDQGcuo",
        authDomain: "insta-groom.firebaseapp.com",
        projectId: "insta-groom",
        storageBucket: "insta-groom.appspot.com",
        messagingSenderId: "241256789023",
        appId: "1:241256789023:web:3825f0fd5dd400b835d12a",
        measurementId: "G-M7TLF5Y2DP"
    })
    const db = firebaseApp.firestore();
    export default db;

