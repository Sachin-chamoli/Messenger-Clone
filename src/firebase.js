
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyCrw8iId89YXVR0sjTPpNf6z8epv6E0GUw",
  authDomain: "facebook-messenger-clone-6e5bf.firebaseapp.com",
  projectId: "facebook-messenger-clone-6e5bf",
  storageBucket: "facebook-messenger-clone-6e5bf.appspot.com",
  messagingSenderId: "646753402575",
  appId: "1:646753402575:web:b5902a08cd2d9f01af81ba"
};
const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app);
export const database = getDatabase(app);
