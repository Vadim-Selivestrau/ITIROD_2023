import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import app from "./app.js";

const auth = getAuth(app);

const signInWithEmail = async (loginEmail, loginPassword) => {
  return await signInWithEmailAndPassword(auth, loginEmail, loginPassword).then(
    (value) => {
      return {
        id: value.user.uid,
        name: value.user.email,
      };
    },
    (error) => {
      console.error(error.message);
      return {};
    }
  );
};

const signUpWithEmail = async (loginEmail, loginPassword) => {
  console.log(loginEmail, loginPassword);
  if (!loginEmail.trim()) return null;

  return await createUserWithEmailAndPassword(
    auth,
    loginEmail,
    loginPassword
  ).then(
    (value) => {
      return {
        id: value.user.uid,
        name: value.user.email,
      };
    },
    (error) => {
      console.error(error.message);
      return {};
    }
  );
};

const signOutFromApp = async () => {
  await signOut(auth);
};

const monitorAuthState = async (setUserData, callback) =>
  await onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      setUserData({
        id: user.uid,
        name: user.email,
      });

      callback();
    } else {
      console.log("no user");
      setUserData({});
    }
  });

export { signInWithEmail, signUpWithEmail, signOutFromApp, monitorAuthState };
