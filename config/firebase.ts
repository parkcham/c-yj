import "firebase/compat/database";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  // appId: process.env.REACT_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  apiKey: "AIzaSyCjB3u9Y3HuNcJeDX8ngGgWFbzGo87mCKk",
  authDomain: "c-yj-8d5e5.firebaseapp.com",
  projectId: "c-yj-8d5e5",
  storageBucket: "c-yj-8d5e5.appspot.com",
  messagingSenderId: "503968108672",
  appId: "1:503968108672:web:361ced0591681d61959665",
  measurementId: "G-M5BXH8TCF9"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
