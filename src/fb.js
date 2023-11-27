import firebase from 'firebase/compat/app'
import "firebase/compat/auth"

export const app = firebase.initializeApp({
    "projectId": "spotibase",
    "appId": "1:991141675288:web:92c096708ea0580d355e6d",
    "storageBucket": "spotibase.appspot.com",
    "apiKey": "AIzaSyCW4KAGkjRfBtU4Qm6xcknh5KUHjBXVMJM",
    "authDomain": "spotibase.firebaseapp.com",
    "messagingSenderId": "991141675288"
  });