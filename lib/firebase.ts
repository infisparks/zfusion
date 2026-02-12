import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDZKI1L-1KzJUWQhgCRd2L4zhvSzTT4fwI",
  authDomain: "z-fusion.firebaseapp.com",
  databaseURL: "https://z-fusion-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "z-fusion",
  storageBucket: "z-fusion.firebasestorage.app",
  messagingSenderId: "734291440969",
  appId: "1:734291440969:web:622bf442de077bb1819698",
  measurementId: "G-ESV59HF8H0",
};

// Ensure we don't re-initialize the app on hot reloads / multiple imports
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getDatabase(app);

