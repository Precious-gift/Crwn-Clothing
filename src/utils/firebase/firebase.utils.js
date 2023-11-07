import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjBPy24ghab71JijbCg0TEMNF0cz-_qhI",
  authDomain: "crwn-clothing-db-64e30.firebaseapp.com",
  projectId: "crwn-clothing-db-64e30",
  storageBucket: "crwn-clothing-db-64e30.appspot.com",
  messagingSenderId: "218742787460",
  appId: "1:218742787460:web:916ea57fb13c456b37e1d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
