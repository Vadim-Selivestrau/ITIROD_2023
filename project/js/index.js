import {
    monitorAuthState
} from "./config.js";

let userData = {
    id: "",
    name: "",
};
export const addOnSubmit = (id, callback) => {
    document.getElementById(id).addEventListener("submit", callback);
};
export const addOnClick = (id, callback) => {
    document.getElementById(id).addEventListener("click", callback);
};

const setUserData = (newData) => {
    userData = JSON.parse(JSON.stringify(newData));
    console.log(newData);
};


monitorAuthState(setUserData, function(){
    console.log(window.location.href)
    if (!window.location.href.includes('main.html')){
    window.location.href = 'main.html';
    }
  });
  export {userData};