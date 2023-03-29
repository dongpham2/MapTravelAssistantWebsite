// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider   } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqoZhZKZtLGgtJXatNisiDr_kVZJnPiKc",
  authDomain: "cap-2-a4419.firebaseapp.com",
  projectId: "cap-2-a4419",
  storageBucket: "cap-2-a4419.appspot.com",
  messagingSenderId: "196854919027",
  appId: "1:196854919027:web:6698fa619b3faddb0adf06",
  measurementId: "G-4R208F3RHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app)
  export {auth}