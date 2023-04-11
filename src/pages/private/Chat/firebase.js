import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7UVTdeIDjx-UcbqGQQ9iu7Z34WJFurJQ",
  authDomain: "chat-780e3.firebaseapp.com",
  projectId: "chat-780e3",
  storageBucket: "chat-780e3.appspot.com",
  messagingSenderId: "845217931882",
  appId: "1:845217931882:web:0f2fab6e9bfe767d602013",
  measurementId: "G-EW9LRTPKHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage();
export const db = getFirestore();
export const auth = getAuth()