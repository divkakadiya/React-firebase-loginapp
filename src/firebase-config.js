// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB4iDd98AB15ptbnMmaCW0JRgMC7F8oQUQ",
    authDomain: "reactdemoapp-13d50.firebaseapp.com",
    projectId: "reactdemoapp-13d50",
    storageBucket: "reactdemoapp-13d50.appspot.com",
    messagingSenderId: "87173619301",
    appId: "1:87173619301:web:c9975c7f13fbbe2d3bb08c",
    measurementId: "G-XP5EN01Y4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
const analytics = getAnalytics(app);