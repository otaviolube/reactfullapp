import dotenv from 'dotenv';
dotenv.config();

import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DB,
    projectId: process.env.REACT_APP_PID,
    storageBucket: process.env.REACT_APP_SB,
    messagingSenderId: process.env.REACT_APP_SID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MID
};

firebase.initializeApp(firebaseConfig);

export const Auth = firebase.auth();

export const signInWithEmailAndPassword = (email: string, password: string) => {
    Auth.signInWithEmailAndPassword(email, password).then(res => {
        console.log(res.user);
    }).catch(error => {
        console.error(error.message);
    })
}

export const createUserWithEmailAndPassword = (email: string, password: string) => {
    Auth.createUserWithEmailAndPassword(email, password).then(res => {
        console.log(res.user);
    }).catch(error => {
        console.error(error.message);
    })
}