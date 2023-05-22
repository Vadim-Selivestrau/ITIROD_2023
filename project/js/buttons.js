
// document.getElementById("cancel_task").addEventListener("click", function (event) {
//     const taskButton = document.createElement("button");
//     taskButton.className = "add_task";
//     taskButton.innerText = "add task";
//     console.log("hello")
//     document.getElementById("create_task").parentElement.parentElement.parentElement.appendChild(taskButton);
//     document.getElementById("new_task").remove();
// });
// // Add event listener to the "add task" button
// document.getElementById("create_task").addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent form submission
//     console.log("hi")
//     // Get form values
//     var taskName = document.querySelector("#new_task input[placeholder='task name']").value;
//     var taskDescription = document.querySelector("#new_task textarea[placeholder='task description']").value;
//     var taskPriority = document.querySelector("#new_task select[name='set_priority']").value;
//     var taskDeadline = document.querySelector("#new_task input[type='date']").value;

//     // Create a new list item
//     var newListItem = document.createElement("li");
//     newListItem.className = "tasks_item";

//     newListItem.innerHTML = `<div class="task ${taskPriority}">
//             <article>${taskName}</article>
//             <p>${taskDescription}</p>
//             </div><div class="task_buttons">
//               <div class="done_task"></div>
//               <div class="edit_task"></div>
//               <div class="trash_task"></div>
//               </div>`

//     document.getElementById("create_task").parentElement.parentElement.parentElement.appendChild(newListItem);

//     document.getElementById("new_task").remove();
// });