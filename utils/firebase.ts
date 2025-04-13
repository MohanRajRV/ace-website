import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyBQyIRMYKQHpKWBHJyPN9vK5DeQWvZQRyw',
  authDomain: 'ace-website-de03e.firebaseapp.com',
  projectId: 'ace-website-de03e',
  storageBucket: 'ace-website-de03e.firebasestorage.app',
  messagingSenderId: '997180235398',
  appId: '1:997180235398:web:77284d5a61286e72f23b07',
  //   measurementId: "G-3303S9GHVT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db };