import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBhJvDwo5J_sLL_WOQ_OuA7bbnsbOSFHlc",
  authDomain: "chat-9e4c4.firebaseapp.com",
  projectId: "chat-9e4c4",
  storageBucket: "chat-9e4c4.appspot.com",
  messagingSenderId: "513900972799",
  appId: "1:513900972799:web:25fb3e8f65de4b58585aca",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
