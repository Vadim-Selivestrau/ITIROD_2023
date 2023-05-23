import { signInWithEmail } from "./config.js";
import { addOnSubmit } from "./index.js";

const login = document.getElementById("login");
const password = document.getElementById("password");

addOnSubmit("login_user", (e) => {
    e.preventDefault();
    signInWithEmail(login.value, password.value);
});
