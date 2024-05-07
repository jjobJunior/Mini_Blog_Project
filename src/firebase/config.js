import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdn_Mj6uTX3vYYVS6oQoQ7EtY8aQN87-s",
  authDomain: "miniblog-467c0.firebaseapp.com",
  projectId: "miniblog-467c0",
  storageBucket: "miniblog-467c0.appspot.com",
  messagingSenderId: "779767731734",
  appId: "1:779767731734:web:aed1e0a3aa947adc39c737",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
