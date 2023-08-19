const renderTopics = (board) => {
  var message = `<aside id="aside">
      <h1>List of projects</h1>`;
  console.log(board.projects.length, "");
  for (var i = 0; i < board.projects.length; i++) {
    var element = board.projects[i];
    var countTasks = "";

    message += `
        <div class="item_collection" id = "i${i}">
          <button>${element.name}</button>
          <div>${countTasks}</div>
        </div>`;
  }
  message += `<button id="new_topic">new topic</button>
    <button id="new_section">add section</button>
  </aside>`;
  return message;
};

const renderProject = (sections) => {
  var message = `<ul id="tasks_list">`;
  for (var i = 0; i < sections.length; i++) {
    var element = sections[i];

    message += `<section class="column" draggable="true" id ="s${i}">
          <div class="header_section">
            <article>${element.name}</article>
            <div class="edit"></div>
            <div class="delete"></div>
          </div>`;
    if ("tasks" in element) {
      for (var j = 0; j < element.tasks.length; j++) {
        var dotherElement = element.tasks[j];
        var priority = "";
        switch (dotherElement.priority) {
          case 1:
            priority = "critical_priority";
            break;
          case 2:
            priority = "high_priority";
            break;
          case 3:
            priority = "medium_priority";
            break;
          case 4:
            priority = "low_priority";
            break;
          default:
            priority = "critical_priority";
        }
        var isComplete = "task";
        var button_style = "done_task";
        if (dotherElement.isComplete) {
          isComplete = "complete_task";
          button_style = "cross_task";
        }
        message += `<li class="tasks_item" draggable="true" ondragstart="dragStart(event)" id="t${j}">
            <div class="${isComplete} ${priority}">
              <article>${dotherElement.name}</article>
              <p>${dotherElement.description}</p>
              <div>${dotherElement.data}</div>
            </div>
            <div class="task_buttons">
              <div class="${button_style}"></div>
              <div class="edit_task"></div>
              <div class="trash_task"></div>
  
            </div>
          </li>`;
      }
    }
    message += `<button class="add_task">add task</button>`;
    message += `</section>`;
  }
  message += "</ul>";
  return message;
};

export { renderProject, renderTopics };
