export function renderTopics(board) {
    var message = `<aside id="aside">
    <h1>List of projects</h1>`;
    board.projects.forEach(element => {
    message+=`
      <div class="item_collection">
        <button>${element.name}</button>
        <div>${element.sections.length}</div>
      </div>`;
  });
  message+=` <button id="new_topic">new topic</button>
  <button id="new_section">add section</button>
</aside>`;
  return message;
}