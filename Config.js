import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig={
  apiKey: "AIzaSyCkdEhzp-TBK_TEaTjIj1Y3SfwkZb8utBg",
  authDomain: "test-3aa47.firebaseapp.com",
  projectId: "test-3aa47",
  storageBucket: "test-3aa47.appspot.com",
  messagingSenderId: "104917956170",
  appId: "1:104917956170:web:6fb01fbd9a8d159a8798b3",
  measurementId: "G-R7L7KRLYMN"
}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};