// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAsVPljKyiOEBmgdm3GU-qiqBpWAACP0qo",
  authDomain: "study-tracker-8e150.firebaseapp.com",
  projectId: "study-tracker-8e150",
  storageBucket: "study-tracker-8e150.firebasestorage.app",
  messagingSenderId: "118840527037",
  appId: "1:118840527037:web:26736fdb280cef17d70fd4",
  measurementId: "G-XV6NY3NBES"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)