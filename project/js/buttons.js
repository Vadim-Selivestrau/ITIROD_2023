import { setBoardData } from "./config.js";
import { userData } from "./index.js";
import { board } from "./main.js";




export function button_check() {
    console.log("Button check start")
    const addButtons = document.querySelectorAll('.add_task');

    // Обработчик события клика на кнопки "add task"
    addButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Создаем элемент формы
            const form = document.createElement('form');
            form.className = "new_task";

            // Пример добавления полей в форму
            form.innerHTML = `<input placeholder="task name">
            <textarea placeholder="task description"></textarea>
            <select name="set_priority" class="priority">
              <option value="" disabled selected hidden>Set priority</option>
              <option value="critical_priority">Criticial priority</option>
              <option value="high_priority">High priority</option>
              <option value="medium_priority">Medium priority</option>
              <option value="low_priority">Low priority</option>
            </select>
            <input type="date" placeholder="task deadline">
            <div class="buttons">
              <button class="create_task">add task</button>

              <button class="cancel_task">cancel</button>
            </div>`

            // Находим ближайшую секцию к кнопке "add task"
            const section = button.closest('section');
            //const button_cancel = button.closest('.cancel_task');

            // Добавляем форму в конец найденной секции
            section.appendChild(form);
            button.remove();
            console.log("create form button pressed")
            create_task_event();
            cancel_task_event();
            edit_task_event();
        });
    });

    // setBoardData(board, userData);
}
function save_task_event() {
    document.querySelectorAll(".save_task").forEach(item => item.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission
        console.log("save task button pressed");
        // Get form values
        var taskName = event.target.parentElement.parentElement.querySelector(".new_task input[placeholder='task name']").value;
        var taskDescription = event.target.parentElement.parentElement.querySelector(".new_task textarea[placeholder='task description']").value;
        var taskPriority = event.target.parentElement.parentElement.querySelector(".new_task select[name='set_priority']").value;
        var taskDeadline = event.target.parentElement.parentElement.querySelector(".new_task input[type='date']").value;

        // Create a new list item
        var newListItem = document.createElement("li");
        newListItem.setAttribute("draggable", "true")
        newListItem.setAttribute("ondragstart", "dragStart(event)")
        newListItem.className = "tasks_item";

        newListItem.innerHTML = `<div class="task ${taskPriority}"> <article>${taskName}</article> <p>${taskDescription}</p> <p>${taskDeadline}</p> </div><div class="task_buttons"> <div class="done_task"></div> <div class="edit_task"></div> <div class="trash_task"></div> </div>`;

        event.target.parentElement.parentElement.parentElement.appendChild(newListItem);
        // addEventListenersToNewElements();


        event.target.closest(".new_task").remove();

        // const newButton = document.createElement("button");
        // newButton.className = "add_task";
        // newButton.innerText = "add task";
        // const section = newListItem.closest('section');
        // section.appendChild(newButton)
        // done_task_event()
        button_check()
        newListItem.querySelector(".done_task").addEventListener("click", addEvent);
        console.log(event.target.parentElement)
        // .querySelector(".done_task").addEventListener("click", addEvent);
        newListItem.querySelector(".trash_task").addEventListener("click", trashEvent);
        newListItem.querySelector(".edit_task").addEventListener("click", editEvent);
        // console.log(event.target.closest(".done_task").value)
        // trash_task_event()
    }));
}
export function create_task_event() {
    document.querySelectorAll(".create_task").forEach(item => item.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission
        console.log("create task button pressed");
        // Get form values
        var taskName = event.target.parentElement.parentElement.querySelector(".new_task input[placeholder='task name']").value;
        var taskDescription = event.target.parentElement.parentElement.querySelector(".new_task textarea[placeholder='task description']").value;
        var taskPriority = event.target.parentElement.parentElement.querySelector(".new_task select[name='set_priority']").value;
        var taskDeadline = event.target.parentElement.parentElement.querySelector(".new_task input[type='date']").value;

        // Create a new list item
        var newListItem = document.createElement("li");
        newListItem.setAttribute("draggable", "true")
        newListItem.setAttribute("ondragstart", "dragStart(event)")
        newListItem.className = "tasks_item";

        newListItem.innerHTML = `<div class="task ${taskPriority}"> <article>${taskName}</article> <p>${taskDescription}</p> <p>${taskDeadline}</p> </div><div class="task_buttons"> <div class="done_task"></div> <div class="edit_task"></div> <div class="trash_task"></div> </div>`;

        event.target.parentElement.parentElement.parentElement.appendChild(newListItem);
        // addEventListenersToNewElements();


        event.target.closest(".new_task").remove();

        const newButton = document.createElement("button");
        newButton.className = "add_task";
        newButton.innerText = "add task";
        const section = newListItem.closest('section');
        section.appendChild(newButton)
        // done_task_event()
        button_check()
        newListItem.querySelector(".done_task").addEventListener("click", addEvent);
        console.log(event.target.parentElement)
        // .querySelector(".done_task").addEventListener("click", addEvent);
        newListItem.querySelector(".trash_task").addEventListener("click", trashEvent);
        newListItem.querySelector(".edit_task").addEventListener("click", editEvent);
        // console.log(event.target.closest(".done_task").value)
        // trash_task_event()
    }));
}

function cancel_edit_task_event() {
    document.querySelectorAll(".cancel_task").forEach(item => item.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission
        console.log("cancel edit button pressed");
        // Get form values
        const section = event.target.closest('section');

        event.target.closest(".new_task").remove();
        

        // const newButton = document.createElement("button");
        // newButton.className = "add_task";
        // newButton.innerText = "add task";
        // console.log(section)
        // section.appendChild(newButton)
        // button_check()
    }));
}
export function cancel_task_event() {
    document.querySelectorAll(".cancel_task").forEach(item => item.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission
        console.log("cancel button pressed");
        // Get form values
        const section = event.target.closest('section');

        event.target.closest(".new_task").remove();


        const newButton = document.createElement("button");
        newButton.className = "add_task";
        newButton.innerText = "add task";
        console.log(section)
        section.appendChild(newButton)
        button_check()
    }));
}
function addEvent(event) {
    console.log("done task pressed");
    event.preventDefault(); // Prevent form submission
    if (event.target.classList.contains("done_task")) {
        event.target.classList.replace("done_task", "cross_task");
        event.target.parentElement.parentElement.querySelector(".task").classList.replace("task", "complete_task")

    } else {
        event.target.parentElement.parentElement.querySelector(".complete_task").classList.replace("complete_task", "task")
        event.target.classList.replace("cross_task", "done_task");
    }
    // setBoardData(board, userData);
}
export function done_task_event() {
    document.querySelectorAll(".done_task, .cross_task").forEach(item => item.addEventListener("click", addEvent));
}
export function trash_task_event() {
    document.querySelectorAll(".trash_task").forEach(item => item.addEventListener("click", trashEvent))

}

export function edit_task_event() {
    document.querySelectorAll(".edit_task").forEach(item => item.addEventListener("click", editEvent))

}

function editEvent(event) {

    event.preventDefault(); // Prevent form submission
    console.log("edit button pressed");
    var item = event.target.closest("li");
    var list_item = item.innerHTML;

    var taskName = item.querySelector("article").textContent;
    var taskDescription = item.querySelector("p").textContent
    //var deadline = item.querySelector(".complete_task > div, .task > div").textContent;


    const form = document.createElement('form');
    item.className = "new_task";

    // Пример добавления полей в форму
    item.innerHTML = `<input placeholder="task name" value="${taskName}">
            <textarea placeholder="task description">${taskDescription}</textarea>
            <select name="set_priority" class="priority">
              <option value="" disabled selected hidden>Set priority</option>
              <option value="critical_priority">Criticial priority</option>
              <option value="high_priority">High priority</option>
              <option value="medium_priority">Medium priority</option>
              <option value="low_priority">Low priority</option>
            </select>
            <input type="date" placeholder="task deadline">
            <div class="buttons">
              <button class="save_task">save task</button>

              <button class="cancel_edit_task">cancel</button>
            </div>`
    // item.innerHTML = `<input placeholder="task name" value="${taskName}">
    // <textarea placeholder="task description">${taskDescription}</textarea>
    // <select name="set_priority" class="priority">
    //   <option value="" disabled selected hidden>Set priority</option>
    //   <option value="critical_priority">Criticial priority</option>
    //   <option value="high_priority">High priority</option>
    //   <option value="medium_priority">Medium priority</option>
    //   <option value="low_priority">Low priority</option>
    // </select>
    // <input type="date" placeholder="task deadline" value="${deadline}"></input>
    // <div class="buttons">
    //   <button class="create_task">add task</button>

    //   <button class="cancel_task">cancel</button>
    // </div>`;
    // setBoardData(board, userData);
    save_task_event();
    cancel_edit_task_event();
    edit_task_event();
    button_check();
}
function editForm() {

}
function trashEvent(event) {

    console.log("trash_task pressed");
    // event.preventDefault(); // Prevent form submission
    event.target.parentElement.parentElement.remove();
    // setBoardData(board, userData);

};
//------------------------------------------
function trashSectionEvent(event) {

    console.log("trash section pressed");
    // event.preventDefault(); // Prevent form submission
    event.target.parentElement.parentElement.remove();
    // setBoardData(board, userData);

};

export function trash_section_event() {
    document.querySelectorAll(".delete").forEach(item => item.addEventListener("click", trashSectionEvent))
}
//------------------------------------------

export function create_section_event() {
    document.querySelector("#new_topic").addEventListener("click", createSection);
}
function createSection(event) {
    console.log("new topic button pressed");
    var section = document.createElement("section");
    section.classList.add("column");
    section.setAttribute("draggable", "true")
    section.innerHTML = `<div class="header_section">
                            <article>new topic</article>
                            <div class="edit"></div>
                            <div class="delete"></div>
                        </div>
                        <button class="add_task">add task</button>`;
    section.querySelector(".delete").addEventListener("click", trashSectionEvent);
    var ul = document.querySelector("#tasks_list");
    ul.appendChild(section);
    button_check()
    //setboardData(board, userData);
}

// button_check()


