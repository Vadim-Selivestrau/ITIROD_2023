

export function renderProject(sections) {

  var message = `<ul id="tasks_list">`;
  sections.forEach(element => {
    message += `<section class="column" draggable="true">
        <div class="header_section">
          <article>${element.name}</article>
          <div class="edit"></div>
          <div class="delete"></div>
        </div>`
    element.tasks.forEach(dotherElement => {
      var priority = "";
      switch (dotherElement.priority) {
        case 1:
          priority = "critical_priority";
          break;
        case 2:
          priority = "high_priority";
          break;
        case 3:
          priority = "medium_priority"
          break;
        case 4:
          priority = "low_priority"
          break;
        default:
          alert("error");
      }
      var isComplete = "task";
      var button_style = "done_task";
      if (dotherElement.isComplete){
        isComplete = "complete_task"
        button_style = "cross_task"
      }
      message += `<li class="tasks_item" draggable="true" ondragstart="dragStart(event)">
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
        </li>`
    })
    message += `<button class="add_task">add task</button>`;
    message += `</section>`;
  });



  message += '</ul>';
  return message;
}