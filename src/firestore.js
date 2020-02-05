import firebase from "@firebase/app";
import "@firebase/firestore";

const config = {
  apiKey: "AIzaSyDxEGIm9D2MmxVLQXpMzROccqpPBvfYy2M",
  authDomain: "quick-react-todo.firebaseapp.com",
  databaseURL: "https://quick-react-todo.firebaseio.com",
  projectId: "quick-react-todo",
  storageBucket: "quick-react-todo.appspot.com",
  messagingSenderId: "612063086476",
  appId: "1:612063086476:web:73a0ba80c5db74c68cf8a9",
    measurementId: "G-PS342XQGE7"
};

const app = firebase.initializeApp(config);
const firestore = firebase.firestore(app);

export default firestore;