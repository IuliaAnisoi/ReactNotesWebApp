// The core Firebase JS SDK is always required and must be listed first

import firebase from "firebase/app";
import "firebase/database";
<script src="https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js"></script>;

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/8.2.3/firebase-auth.js"></script>;
<script src="/__/firebase/8.2.3/firebase-firestore.js"></script>;
<script src="https://www.gstatic.com/firebasejs/8.2.3/firebase-database.js"></script>;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM2TcWhnQRXoIvZoKid6GMFvRfy3p0ap8",
  authDomain: "react-notes-app-4c696.firebaseapp.com",
  projectId: "react-notes-app-4c696",
  storageBucket: "react-notes-app-4c696.appspot.com",
  messagingSenderId: "1029966902485",
  appId: "1:1029966902485:web:e531e581cd59bca08e5e5c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export default firebase;
