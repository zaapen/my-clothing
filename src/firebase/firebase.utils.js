import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCJKHVyLpuDXTm0i11fj55B2r4SS114VsI",
  authDomain: "myclothing-4ff4b.firebaseapp.com",
  databaseURL: "https://myclothing-4ff4b.firebaseio.com",
  projectId: "myclothing-4ff4b",
  storageBucket: "myclothing-4ff4b.appspot.com",
  messagingSenderId: "626464803302",
  appId: "1:626464803302:web:ed798a4a2322956d3a2e27",
  measurementId: "G-E1R82V8S3J"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;