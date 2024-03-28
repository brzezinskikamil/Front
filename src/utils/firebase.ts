import { initializeApp } from "firebase/app";
import {
  VITE_APP_FIREBASE_APIKEY,
  VITE_APP_FIREBASE_APPID,
  VITE_APP_FIREBASE_AUTHDOMAIN,
  VITE_APP_FIREBASE_MESSAGINGSENDERID,
  VITE_APP_FIREBASE_PROJECTID,
  VITE_APP_FIREBASE_STORAGEBUCKET,
} from "../config";

export const firebaseConfig = {
  apiKey: VITE_APP_FIREBASE_APIKEY,
  authDomain: VITE_APP_FIREBASE_AUTHDOMAIN,
  projectId: VITE_APP_FIREBASE_PROJECTID,
  storageBucket: VITE_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: VITE_APP_FIREBASE_MESSAGINGSENDERID,
  appId: VITE_APP_FIREBASE_APPID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
