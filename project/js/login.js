import { signInWithEmail } from "./config.js";
import { addOnSubmit } from "./index.js";
import { monitorAuthState } from "./config.js";
import { setUserData } from "./index.js";
const login = document.getElementById("login");
const password = document.getElementById("password");

addOnSubmit("login_user", (e) => {
    e.preventDefault();
    signInWithEmail(login.value, password.value);
});

monitorAuthState(setUserData, function(){
    console.log(window.location.href)
    if (!window.location.href.includes('main.html')){
    window.location.href = 'main.html';
    }
  });