// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXRsrMyl9JAWeKLzIQxgRQNFJdWCHYfCo",
  authDomain: "personal-project-1d6e7.firebaseapp.com",
  projectId: "personal-project-1d6e7",
  storageBucket: "personal-project-1d6e7.appspot.com",
  messagingSenderId: "899569129037",
  appId: "1:899569129037:web:babdea853f9aa114d06e04",
  measurementId: "G-DVHQYMVN52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
export {

    app,analytics,auth
}