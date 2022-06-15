// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnZS4zoBTjHwoeQpntVs-4yruqBu1jJ5o",
    authDomain: "malcom-photography.firebaseapp.com",
    projectId: "malcom-photography",
    storageBucket: "malcom-photography.appspot.com",
    messagingSenderId: "230441925664",
    appId: "1:230441925664:web:5c881bd2c5423ae9e81045"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;