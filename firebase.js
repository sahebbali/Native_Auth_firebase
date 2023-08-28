import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBdNj8l8uag-9wJx0Q7sqR8sxl3Xv02Qsw",
  authDomain: "fir-auth-eae8e.firebaseapp.com",
  projectId: "fir-auth-eae8e",
  storageBucket: "fir-auth-eae8e.appspot.com",
  messagingSenderId: "716631367132",
  appId: "1:716631367132:web:fd47087fccd9776dff4319",
  measurementId: "G-VY8H37JJKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);