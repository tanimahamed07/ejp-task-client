import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVrDvAn5oTvmYa--FCrc7ClFgbrKv5Q34",
  authDomain: "ejp-task.firebaseapp.com",
  projectId: "ejp-task",
  storageBucket: "ejp-task.firebasestorage.app",
  messagingSenderId: "989814160004",
  appId: "1:989814160004:web:7aae0ca81b1211569360d1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
