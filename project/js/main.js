import { addOnClick, userData } from "./index.js";
import { getBoardData, setBoardData, signOutFromApp } from "./config.js";
import { renderProject } from "./render_project.js";
import { renderTopics } from "./render_topics.js";

getBoardData(userData);

addOnClick("header_link", (e) => {
  e.preventDefault();
  signOutFromApp();
  window.location.href = "login.html";
});
export const ChangeBoard = (data) => {
  board = data.board;
  var tasks = document.getElementsByClassName("tasks")[0];
  var topics = document.getElementById("my_tasks");
  topics.innerHTML = renderTopics(board);
  tasks.innerHTML = renderProject(board.projects[0].sections);
};
