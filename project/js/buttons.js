import { setBoardData } from "./config.js";
import { userData, board, currentProjectID } from "./index.js";



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
              <option value="1">Criticial priority</option>
              <option value="2">High priority</option>
              <option value="3">Medium priority</option>
              <option value="4">Low priority</option>
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
        const sectionCreate = parseInt(item.closest("section").id.replace("s", ""));
        const taskCreate = parseInt(item.closest("li").id.replace("t", ""));
        board.projects[currentProjectID].sections[sectionCreate].tasks[taskCreate]={
            data: taskDeadline,
            description: taskDescription,
            isComplete: false,
            name: taskName,
            priority: taskPriority,
        };

        setBoardData(board, userData);

 
    }));
}
export function create_task_event() {
    document.querySelectorAll(".create_task").forEach(item => item.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission
        console.log("create task button pressed");
        // Get form values
        var taskName = event.target.parentElement.parentElement.querySelector(".new_task input[placeholder='task name']").value;
        var taskDescription = event.target.parentElement.parentElement.querySelector(".new_task textarea[placeholder='task description']").value;
        var taskPriority = parseInt(event.target.parentElement.parentElement.querySelector(".new_task select[name='set_priority']").value);
        var taskDeadline = event.target.parentElement.parentElement.querySelector(".new_task input[type='date']").value;

        const sectionCreate = parseInt(item.closest("section").id.replace("s", ""));

        board.projects[currentProjectID].sections[sectionCreate].tasks.push({
            data: taskDeadline,
            description: taskDescription,
            isComplete: false,
            name: taskName,
            priority: taskPriority,
        });
        setBoardData(board, userData);

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
        //получить id текущего section; получить id текущий task; заменить в board.projects[currenP..].sections[idSection].tasks[idTask].isComplete = true
        event.target.parentElement.parentElement.querySelector(".task").id.classList.replace("task", "complete_task")

    } else {
        // тоже самое только для false
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
    const sectionCreate = parseInt(event.target.closest("section").id.replace("s", ""));
    const taskCreate = parseInt(event.target.closest("li").id.replace("t", ""));
    board.projects[currentProjectID].sections[sectionCreate].tasks.splice(taskCreate,1);
    setBoardData(board, userData);

};
//------------------------------------------
function trashSectionEvent(event) {

    console.log("trash section pressed");
    // event.preventDefault(); // Prevent form submission
    const sectionCreate = parseInt(event.target.closest("section").id.replace("s", ""));
    board.projects[currentProjectID].sections.splice(sectionCreate,1);
    setBoardData(board, userData);

};

export function trash_section_event() {
    document.querySelectorAll(".delete").forEach(item => item.addEventListener("click", trashSectionEvent))
}
//------------------------------------------

export function create_section_event() {
    document.querySelector("#new_section").addEventListener("click", createSection);
}
function createSection(event) {
    board.projects[currentProjectID].sections.push({
        name : "new section",
        tasks : [],
    });
    setBoardData(board, userData);
}


export function butttonFunctionality() {
    console.log("button functionality");
    button_check();
    create_task_event();
    cancel_task_event();
    done_task_event();
    trash_task_event();
    edit_task_event();
    create_section_event();
}