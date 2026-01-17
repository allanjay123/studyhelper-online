// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCk3YyAne_nz0fwChI6557R8RtcmlMAawA",
  authDomain: "studyhelper-app.firebaseapp.com",
  projectId: "studyhelper-app",
  storageBucket: "studyhelper-app.firebasestorage.app",
  messagingSenderId: "390954392930",
  appId: "1:390954392930:web:4c7ebc6a37112e98dce03b"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// LOGIN
window.login = function () {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const msg = document.getElementById("message");

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      msg.style.color = "green";
      msg.innerText = "SUCCESS LOGIN ✅";
      setTimeout(() => {
        document.getElementById("home").style.display = "block";
        document.getElementById("auth").style.display = "none";
      }, 800);
    })
    .catch((error) => {
      msg.style.color = "red";
      msg.innerText = error.message;
    });
};

// REGISTER
window.register = function () {
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
  const msg = document.getElementById("message");

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      msg.style.color = "green";
      msg.innerText = "REGISTER SUCCESS ✅ You can now login";
    })
    .catch((error) => {
      msg.style.color = "red";
      msg.innerText = error.message;
    });
};
