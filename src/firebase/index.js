import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDCT9__RNQoi6l4dLFV0H6Zkpi4JOAfXJs",
  authDomain: "ibenta-2018.firebaseapp.com",
  databaseURL: "https://ibenta-2018.firebaseio.com",
  projectId: "ibenta-2018",
  storageBucket: "ibenta-2018.appspot.com",
  messagingSenderId: "112509842843"
};
firebase.initializeApp(config);

const storage = firebase.storage();

export {
  storage, firebase as default
}