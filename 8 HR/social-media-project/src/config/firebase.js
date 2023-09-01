// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAGmSGFICWFFVxHmN760-f6_PPiwjajhyE",
	authDomain: "react-social-media-3e9e2.firebaseapp.com",
	projectId: "react-social-media-3e9e2",
	storageBucket: "react-social-media-3e9e2.appspot.com",
	messagingSenderId: "1049728963392",
	appId: "1:1049728963392:web:fd9e00321e91e6077060a5",
	measurementId: "G-GL6ZHXTBBM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
