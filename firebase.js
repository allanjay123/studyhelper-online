import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "DITO-ANG-BAGO-AT-EXACT",
  authDomain: "studyhelper-app.firebaseapp.com",
  projectId: "studyhelper-app",
  storageBucket: "studyhelper-app.appspot.com",
  messagingSenderId: "390954392930",
  appId: "DITO-ANG-BAGONG-APP-ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
