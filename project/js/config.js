import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {
    getAuth,
    connectAuthEmulator,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js"
import {
    getDatabase,
    onValue,
    ref,
    set,
    remove
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js"
const firebaseConfig = {
    apiKey: "AIzaSyDsha8Ye20mpDDv1539qLl13nNmNkM8Btg",
    authDomain: "todo-app-a943c.firebaseapp.com",
    databaseURL: "https://todo-app-a943c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todo-app-a943c",
    storageBucket: "todo-app-a943c.appspot.com",
    messagingSenderId: "1064124595879",
    appId: "1:1064124595879:web:0040300234fb2205466582"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const signInWithEmail = async (loginEmail, loginPassword, callback) => {
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword).catch(
        (error) => {
            alert(error.message);
        }
    );
};

export const signUpWithEmail = async (loginEmail, loginPassword, callback) => {
    console.log(loginEmail, loginPassword)
    if (!loginEmail.trim()) return;

    await createUserWithEmailAndPassword(auth, loginEmail, loginPassword).catch(
        (error) => {
            alert(error.message);
        }
    );
};



export const signOutFromApp = async () => {
    await signOut(auth);
};
export const monitorAuthState = async (setUserData, callback) =>
    await onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user);
            setUserData({
                id: user.uid,
                isSignedIn: true,
                name: user.email,
            });
            callback();
        } else {
            console.log("no user");
            setUserData({});
        }
    });
export async function monitorBoardState(board, user, callback) {
        console.log("catched");
        const dbRef = ref(getDatabase(), 'boards/' + user.id);
        onValue(dbRef, (snapshot) => {
            if (snapshot.exists()) {
                callback(snapshot.val());
            } else {
                console.log("No data available");
            }

        });
}



export function setBoardData(board, user) {
    const db = getDatabase();
    const reference = ref(db, 'boards/' + user.id);
    set(reference, {
        board: board
    });
}