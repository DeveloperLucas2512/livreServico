
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyAB-UkCrx7kPYWuddjy3X2yCc9Jo2Iup90",
  authDomain: "applivreservicos.firebaseapp.com",
  projectId: "applivreservicos",
  storageBucket: "applivreservicos.appspot.com",
  messagingSenderId: "224206414878",
  appId: "1:224206414878:web:792eaccc413642c14f7a0f",
};

if(!firebase.apps.length){

  firebase.initializeApp(firebaseConfig)
 }

 export default firebase;
