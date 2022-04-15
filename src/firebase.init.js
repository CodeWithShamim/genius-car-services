// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeL3iQbxR-k7HCT-0Mo84Tdyxq1jd5yOc",
    authDomain: "genius-car-services-66dc1.firebaseapp.com",
    projectId: "genius-car-services-66dc1",
    storageBucket: "genius-car-services-66dc1.appspot.com",
    messagingSenderId: "886640442042",
    appId: "1:886640442042:web:ea6b65f3f268b54a08a083"
        // apiKey: process.env.REACT_APP_apiKey,
        // authDomain: process.env.REACT_APP_authDomain,
        // projectId: process.env.REACT_APP_projectId,
        // storageBucket: process.env.REACT_APP_storageBucket,
        // messagingSenderId: process.env.REACT_APP_messagingSenderId,
        // appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;