import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDYlfHHDalxslBxFl6aWLYrQlIURjseXu8",
    authDomain: "fir-firegram-e34f8.firebaseapp.com",
    projectId: "fir-firegram-e34f8",
    storageBucket: "fir-firegram-e34f8.appspot.com",
    messagingSenderId: "406521145501",
    appId: "1:406521145501:web:99e0e5f21566900b9ccc74"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp


  export {projectStorage, projectFirestore, timestamp};