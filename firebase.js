import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCk3YyAne_nz0fwChI6557R8RtcmlMAawA",
  authDomain: "studyhelper-app.firebaseapp.com",
  projectId: "studyhelper-app",
  storageBucket: "studyhelper-app.firebasestorage.app",
  messagingSenderId: "390954392930",
  appId: "1:390954392930:web:4c7ebc6a37112e98dce03b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("msg");

  msg.innerText = "Logging in...";

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      msg.innerText = "LOGIN SUCCESS ✅";
    })
    .catch((e) => {
      msg.innerText = e.message;
    });
};

window.register = function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("msg");

  msg.innerText = "Registering...";

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      msg.innerText = "REGISTER SUCCESS ✅ You can now login";
    })
    .catch((e) => {
      msg.innerText = e.message;
    });
};
