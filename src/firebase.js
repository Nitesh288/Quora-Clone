import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV4ZdkwZOs5JCCPQh-X_q4D9vuYA9nT5Q",
  authDomain: "quora-clone-c8a34.firebaseapp.com",
  projectId: "quora-clone-c8a34",
  storageBucket: "quora-clone-c8a34.appspot.com",
  messagingSenderId: "927490180703",
  appId: "1:927490180703:web:a1e017d854a482f2f2fdea"
};

console.log(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;