// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgbaMHCWddnRSVYlG5aKjCll2I_NAj4jY",
    authDomain: "popita-porfolio.firebaseapp.com",
    projectId: "popita-porfolio",
    storageBucket: "popita-porfolio.firebasestorage.app",
    messagingSenderId: "59197358505",
    appId: "1:59197358505:web:6996f52210e8e67444c4b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {

    } else {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = "welcome.html";
        document.body.appendChild(a);
        a.click();
    }
});
