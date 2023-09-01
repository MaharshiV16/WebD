// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA12LPj_7YOpYZGc0Q85h4Q7n3CWd17eXc",
	authDomain: "gapshap-40a1e.firebaseapp.com",
	projectId: "gapshap-40a1e",
	storageBucket: "gapshap-40a1e.appspot.com",
	messagingSenderId: "133464515474",
	appId: "1:133464515474:web:06298093d4bb7b1c65974b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
