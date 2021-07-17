import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBgNfI8rzh3IjFZJy55GAw-qVO3s4UHEbY",
  authDomain: "disney-clone-b8d49.firebaseapp.com",
  projectId: "disney-clone-b8d49",
  storageBucket: "disney-clone-b8d49.appspot.com",
  messagingSenderId: "624431881911",
  appId: "1:624431881911:web:c6842726e797171a48b732",
  measurementId: "G-1WTJ1N47CN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
