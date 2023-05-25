import { addOnClick, userData } from "./index.js";
import { getBoardData, setBoardData, signOutFromApp } from "./config.js";
import { renderProject } from "./render_project.js";
import { renderTopics } from "./render_topics.js";
import {create_task_event, cancel_task_event, done_task_event, trash_task_event, edit_task_event, create_section_event} from "./buttons.js"
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
export const ChangeBoard = (data) => {

    board = data.board;
    var tasks = document.getElementsByClassName("tasks")[0];
    var topics = document.getElementById("my_tasks");
    topics.innerHTML = renderTopics(board);
    tasks.innerHTML = renderProject(board.projects[0].sections);

}

    // create_task_event();
    
    // cancel_task_event();
    // // enableDnD();
    // done_task_event();
    // trash_task_event();
    // edit_task_event();
// setBoardData(board,userData);

getBoardData(userData);
    // create_task_event();
    
    // cancel_task_event();
    // // enableDnD();
    // done_task_event();
    // trash_task_event();
    // edit_task_event();
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//set board data, after changing setBoardData(userData);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log("before buttons chesk")


addOnClick("header_link", (e) => {

    e.preventDefault();
    signOutFromApp();
    window.location.href = 'login.html';

});




export {board};