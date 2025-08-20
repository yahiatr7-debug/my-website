<script>
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDejheGAJsJ64GwIs_cM6a8ruA9lif3ys",
  authDomain: "my-website-c29aa.firebaseapp.com",
  projectId: "my-website-c29aa",
  storageBucket: "my-website-c29aa.firebasestorage.app",
  messagingSenderId: "267295882773",
  appId: "1:267295882773:web:8a32cabc8b9c8ee57d581c",
  measurementId: "G-R6KY83Z8N7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  // تهيئة Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
</script>
