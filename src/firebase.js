import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeTu2PfMx0hzFCMn2KKBHSeBJQvCQs524",
  authDomain: "blog-91ac6.firebaseapp.com",
  projectId: "blog-91ac6",
  storageBucket: "blog-91ac6.appspot.com",
  messagingSenderId: "750369334005",
  appId: "1:750369334005:web:9fee9afde8b25b0eac9bbc",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
