import { addOnClick, userData } from "./index.js";
import { setBoardData, signOutFromApp } from "./config.js";
import { renderProject } from "./render_project.js";
import { button_check, create_task_event, cancel_task_event } from "./buttons.js"
// import { enableDnD } from "./drag_n_drop.js";


let board = {
    projects: [
        {
            name: "first day",
            sections: [
                {
                    name: "AAAAAA",
                    tasks: [
                        {
                            name: "make zavtrak",
                            description: "1 egg 2 sosiski",
                            priority: 1,
                            isComplete: false,
                            data: "12.05.2023"
                        },
                        {
                            name: "make lunch",
                            description: "2 egg 3 sosiski",
                            priority: 2,
                            isComplete: true,
                            data: "12.05.2023"
                        },
                    ]
                },
                {
                    name: "BBBBBBBB",
                    tasks: [
                        {
                            name: "make zavtrak",
                            description: "3 egg 4 sosiski",
                            priority: 3,
                            isComplete: true,
                            data: "12.05.2023"
                        },
                        {
                            name: "make lunch",
                            description: "4 egg 5 sosiski",
                            priority: 4,
                            isComplete: false,
                            data: "12.05.2023"
                        },
                    ]
                }
            ]
        }
    ]
}

setBoardData(board, userData)

var tasks = document.getElementsByClassName("tasks")[0];
tasks.innerHTML = renderProject(board.projects[0].sections);
button_check();
create_task_event();

cancel_task_event();
// enableDnD();
// done_task_event();
addOnClick("header_link", (e) => {

    e.preventDefault();
    signOutFromApp();
    window.location.href = 'login.html';

});