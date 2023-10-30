
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCt9mz26hzKkhr_scV7s_xcn_hzdULpyDI",
  authDomain: "relu-task-firebase.firebaseapp.com",
  projectId: "relu-task-firebase",
  storageBucket: "relu-task-firebase.appspot.com",
  messagingSenderId: "367669596395",
  appId: "1:367669596395:web:e0d71b97b9b1741fe6aeae",
  measurementId: "G-B2JR20HS6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth()