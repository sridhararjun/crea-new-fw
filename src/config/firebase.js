import firebase from "firebase"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAcXnkJ1XnOhJqTC3NlepI-yJMMsZHi5kA",
    authDomain: "crea-subscriptions.firebaseapp.com",
    projectId: "crea-subscriptions",
    storageBucket: "crea-subscriptions.appspot.com",
    messagingSenderId: "965535791735",
    appId: "1:965535791735:web:500ca38476620a09136472",
    measurementId: "G-1TD507QRCC"
});

firebase.analytics();

var db = firebaseConfig.database();

export { db };