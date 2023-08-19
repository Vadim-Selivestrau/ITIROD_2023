import { addOnClick } from "./index.js";
import { renderProject, renderTopics } from "./render.js";
import { signOutFromApp } from "./auth.js";
import { read, bind } from "./db.js";

let board = null;

const ChangeBoard = (data) => {
  console.log(data);
  board = data;
  
  let tasks = document.getElementsByClassName("tasks")[0];
  let topics = document.getElementById("my_tasks");
  
  topics.innerHTML = renderTopics(board);
  tasks.innerHTML = renderProject(board.projects[0].sections);
};

const currentUser = await read("currentUser/");
const dbPath = `boards/${currentUser.id}`;

bind(dbPath, ChangeBoard);
addOnClick("header_link", (e) => {
  e.preventDefault();
  signOutFromApp();
  window.location.href = "login.html";
});

export { dbPath, board };
