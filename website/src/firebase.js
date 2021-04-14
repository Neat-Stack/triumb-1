import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyCiIN2d3ROE9IvTRO9CSaJeBk5czDTdXJI",
    authDomain: "triumb-114d3.firebaseapp.com",
    projectId: "triumb-114d3",
    storageBucket: "triumb-114d3.appspot.com",
    messagingSenderId: "232315601476",
    appId: "1:232315601476:web:4c66363ccf2f30a5343211"
  };


  // Initialize Firebase
 const firebaseApp =  firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth()

export {db,auth}