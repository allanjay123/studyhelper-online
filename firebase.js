import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCk3YyAne_nz0fWcH16557R8Rtcm1MAawA",
  authDomain: "studyhelper-app.firebaseapp.com",
  projectId: "studyhelper-app",
  storageBucket: "studyhelper-app.appspot.com",
  messagingSenderId: "390954392930",
  appId: "1:390954392930:web:4c7ebc6a37112e98dce03b"
};

// INIT
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
