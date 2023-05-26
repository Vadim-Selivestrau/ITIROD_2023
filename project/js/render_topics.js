import { currentProjectID } from "./config.js";

export function renderTopics(board) {

  var message = `<aside id="aside">
    <h1>List of projects</h1>`;
    console.log(board.projects.length,"")
  for (var i = 0; i < board.projects.length; i++) {
    var element = board.projects[i];
    var countTasks = "";

    // for (var k = 0; k < board.projects[currentProjectID].sections.length; k++) {
    //   console.log("----------------------------------");
    //   console.log(board.projects[currentProjectID].sections.length)
    //   console.log("----------------------------------");
    //   for (var j = 0; j < board.projects[currentProjectID].sections[k].tasks.length; j++) {
    //     console.log("LENGTH OF TASKS",board.projects[currentProjectID].sections[k].tasks.length)
    //     if (!board.projects[currentProjectID].sections[k].tasks[j].isComplete) {
    //       countTasks += 1;
    //     }
    //   }
    // }
    message += `
      <div class="item_collection" id = "i${i}">
        <button>${element.name}</button>
        <div>${countTasks}</div>
      </div>`;
  };
  message += `<button id="new_topic">new topic</button>
  <button id="new_section">add section</button>
</aside>`;
  return message;
}