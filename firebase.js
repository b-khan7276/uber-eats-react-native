import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDo7Z2ED83VUaIVW7j3orz0GSRW7eWo9_0",
    authDomain: "food-delivery-b82b7.firebaseapp.com",
    projectId: "food-delivery-b82b7",
    storageBucket: "food-delivery-b82b7.appspot.com",
    messagingSenderId: "815843508818",
    appId: "1:815843508818:web:27a5247f292f734b4f158b"
  };
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;