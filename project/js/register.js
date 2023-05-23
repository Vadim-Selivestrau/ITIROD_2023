import { signUpWithEmail } from "./config.js";
import { addOnSubmit } from "./index.js";

const login = document.getElementById("login");
const password = document.getElementById("password");

addOnSubmit("create_account", (e) => {
    e.preventDefault();
    signUpWithEmail(login.value, password.value);
});
