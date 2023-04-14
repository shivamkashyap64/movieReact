
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBXU-2jaPW7NTY9RzooCAY1256AvApdGOk",
  authDomain: "filmyverse-80c1b.firebaseapp.com",
  projectId: "filmyverse-80c1b",
  storageBucket: "filmyverse-80c1b.appspot.com",
  messagingSenderId: "316238885268",
  appId: "1:316238885268:web:cdc2bac605ea122830df81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const moviesRef =collection(db,"movies");
export const reviewsRef =collection(db,"reviews"); 
export const usersRef =collection(db,"users"); 

export default app;