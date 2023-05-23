import { addOnClick, userData } from "./index.js";
import { setBoardData, signOutFromApp } from "./config.js";
import { renderProject } from "./render_project.js";

let board = {
    projects: [
        {
            name: "first day",
            sections:[
                {
                    name: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                    tasks:[
                        {
                            name:"make zavtrak",
                            description:"1 egg 2 sosiski",
                            priority: 1,
                            isComplete: false,
                            data: "12.05.2023"
                        },
                        {
                            name:"make lunch",
                            description:"1 egg 2 sosiski",
                            priority: 1,
                            isComplete: false,
                            data: "12.05.2023"
                        },
                        {
                            name:"make uzhin",
                            description:"1 egg 2 sosiski",
                            priority: 1,
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

addOnClick("header_link", (e) => {
    
    e.preventDefault();
    signOutFromApp();
    window.location.href = 'login.html';

});