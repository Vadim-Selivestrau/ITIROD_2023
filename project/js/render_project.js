export function renderProject(sections) {
    var message = `<ul id="tasks_list">`;
    sections.forEach(element => {
        message+=`<section class="column" draggable="true">
        <div class="header_section">
          <article>${element.name}</article>
          <div class="edit"></div>
          <div class="delete"></div>
        </div>
        <li class="tasks_item" draggable="true" ondragstart="dragStart(event)">
          <div class="task critical_priority">
            <article>make mockup</article>
            <p>to do mockup in figma</p>
            <div>14.04.2023</div>
          </div>
          <div class="task_buttons">
            <div class="done_task"></div>
            <div class="edit_task"></div>
            <div class="trash_task"></div>

          </div>
        </li>
        <li class="tasks_item" draggable="true" ondragstart="dragStart(event)">
          <div class="complete_task medium_priority">
            <article>task name</article>
            <p>task description</p>
          </div>
          <div class="task_buttons">
            <div class="cross_task"></div>
            <div class="edit_task"></div>
            <div class="trash_task"></div>

          </div>
        </li>
        <button class="add_task">add task</button>
      </section>`;
    }); 
       
    
        
    message += '</ul>';
    return message;
}