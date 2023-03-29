// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUBpKSKR50beGHGwG7ndzGZ0XvnsaXIso",
  authDomain: "twitter-clone-37b2c.firebaseapp.com",
  projectId: "twitter-clone-37b2c",
  storageBucket: "twitter-clone-37b2c.appspot.com",
  messagingSenderId: "711142361136",
  appId: "1:711142361136:web:4e3cb3691f0eca2f7345f5"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };