export function renderTopics(board) {
  var message = `<aside id="aside">
    <h1>List of projects</h1>`;
  console.log(board.projects.length, "")
  for (var i = 0; i < board.projects.length; i++) {
    var element = board.projects[i];
    var countTasks = "";

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
