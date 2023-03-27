import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDodpLhQ_N1lrVLAtdO80yULy91lB4dZ38",
	authDomain: "to-do-app-7b0f2.firebaseapp.com",
	projectId: "to-do-app-7b0f2",
	storageBucket: "to-do-app-7b0f2.appspot.com",
	messagingSenderId: "749208391309",
	appId: "1:749208391309:web:1e425946264134cd271cc4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
