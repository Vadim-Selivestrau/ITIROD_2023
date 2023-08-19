import { signUpWithEmail } from "./auth.js";
import { addOnSubmit } from "./index.js";
import { setUserData } from "./login.js";

const login = document.getElementById("login");
const password = document.getElementById("password");

addOnSubmit("create_account", (e) => {
  e.preventDefault();
  setUserData(signUpWithEmail(login.value, password.value));
});
