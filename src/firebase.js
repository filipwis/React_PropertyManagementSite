import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'maja-392a1.firebaseapp.com',
  projectId: 'maja-392a1',
  storageBucket: 'maja-392a1.appspot.com',
  messagingSenderId: '93720657958',
  appId: '1:93720657958:web:f1beb6f03ec9faf6ad66e7',
  measurementId: 'G-XNJ1QPHPKS',
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();
export const auth = firebase.auth();

export default firebase;
