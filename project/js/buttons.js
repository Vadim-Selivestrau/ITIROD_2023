


function filterItems() {
    // Получаем значение из поля input
    const inputValue = document.querySelector('.input-header').value.toLowerCase();

    // Получаем все элементы коллекции
    const itemElements = document.querySelectorAll('.item_collection');

    // Перебираем элементы и скрываем или отображаем в соответствии с введенным значением
    itemElements.forEach(function (item) {
        const button = item.querySelector('button');
        const buttonText = button.textContent.toLowerCase();
        if (buttonText.includes(inputValue)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}


export function button_check() {
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
        });
    });
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
        button_check()
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

// export function done_task_event() {
//     document.querySelectorAll(".done_task").addEventListener("click", function (event) {
//         event.preventDefault(); // Prevent form submission
//         console.log("done task pressed");
//         const task = document.querySelector(".task").closest('.done_task');
//         task.classList.remove("done_task");
//         task.classList.add("cross_task");
//     });
// }

button_check()