// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyBZsfTZyl07znBGvcIKdVPn9714UFvzoeg",
  authDomain: "whiskylist-5832a.firebaseapp.com",
  projectId: "whiskylist-5832a",
  storageBucket: "whiskylist-5832a.appspot.com",
  messagingSenderId: "795311844318",
  appId: "1:795311844318:web:2a8860b3eaa7f63c184b4f",
  measurementId: "G-2HFFGDK9HR",
});

export const firestore = getFirestore(firebaseConfig);
