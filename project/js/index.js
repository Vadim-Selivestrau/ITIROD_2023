import {
    monitorAuthState
} from "./config.js";
import { renderProject } from "./render_project.js";
import { renderTopics } from "./render_topics.js";
import {butttonFunctionality} from "./buttons.js"

let board;
let currentProjectID;
let userData;
export const addOnSubmit = (id, callback) => {
    document.getElementById(id).addEventListener("submit", callback);
};
export const addOnClick = (id, callback) => {
    document.getElementById(id).addEventListener("click", callback);
};

export const setUserData = (newData) => {
    userData = JSON.parse(JSON.stringify(newData));
    console.log(newData);
};
export const ChangeBoard = (data) => {

    board = data.board;
    var tasks = document.getElementsByClassName("tasks")[0];
    var topics = document.getElementById("my_tasks");
    topics.innerHTML = renderTopics(board);
    tasks.innerHTML = renderProject(board.projects[0].sections);
    butttonFunctionality();
}

  export {userData};
  export {board};
  export {currentProjectID};