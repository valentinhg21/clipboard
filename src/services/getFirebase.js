import firebase from "firebase";


import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDiJ6K_LZHilB_mc9QxObb8mbnjfTIAmu4",
  authDomain: "clipboard-ecommerce-coderhouse.firebaseapp.com",
  projectId: "clipboard-ecommerce-coderhouse",
  storageBucket: "clipboard-ecommerce-coderhouse.appspot.com",
  messagingSenderId: "138135956196",
  appId: "1:138135956196:web:f15d778d53030efd825af1"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app);
}