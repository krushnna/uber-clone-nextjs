// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider,getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB77ghaKRXoZ-RZsx8eyJKpv8mybMBtaqQ",
  authDomain: "uber-next-clone-portfolio.firebaseapp.com",
  projectId: "uber-next-clone-portfolio",
  storageBucket: "uber-next-clone-portfolio.appspot.com",
  messagingSenderId: "41345032225",
  appId: "1:41345032225:web:9f6b16103df362a8114360",
  measurementId: "G-J5E55Z3FP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app ,auth,provider}