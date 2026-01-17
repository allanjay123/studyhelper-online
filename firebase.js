import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCk3YyAne_nz0fwChI6557R8RtcmlMAawA",
  authDomain: "studyhelper-app.firebaseapp.com",
  projectId: "studyhelper-app",
  storageBucket: "studyhelper-app.appspot.com", // ✅ IMPORTANT
  messagingSenderId: "390954392930",
  appId: "1:390954392930:web:4c7ebc6a37112e98dce03b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
