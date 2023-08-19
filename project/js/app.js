import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDsha8Ye20mpDDv1539qLl13nNmNkM8Btg",
    authDomain: "todo-app-a943c.firebaseapp.com",
    databaseURL:
      "https://todo-app-a943c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todo-app-a943c",
    storageBucket: "todo-app-a943c.appspot.com",
    messagingSenderId: "1064124595879",
    appId: "1:1064124595879:web:0040300234fb2205466582",
  };
const app = initializeApp(firebaseConfig);

export default app;
