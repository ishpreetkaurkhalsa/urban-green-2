import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDnuNRoiL0eR_cpaQqWIusjbS5QGN4cqqE",
  authDomain: "fir-auth-5cf1d.firebaseapp.com",
  projectId: "fir-auth-5cf1d",
  storageBucket: "fir-auth-5cf1d.appspot.com",
  messagingSenderId: "711142995810",
  appId: "1:711142995810:web:d383473805016f4eba5e3b",
  measurementId: "G-7XCFRKJRBX",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { app, auth, provider };
