import { signInWithEmail, monitorAuthState } from "./auth.js";
import { addOnSubmit } from "./index.js";
import { write } from "./db.js";

const login = document.getElementById("login");
const password = document.getElementById("password");

const setUserData = (newData) => {
  write("currentUser/", newData);
};

addOnSubmit("login_user", (e) => {
  e.preventDefault();
  setUserData(signInWithEmail(login.value, password.value));
});

monitorAuthState(setUserData, function () {
  console.log(window.location.href);
  if (!window.location.href.includes("main.html")) {
    window.location.href = "main.html";
  }
});


export { setUserData };
