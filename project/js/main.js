import { addOnClick, userData } from "./index.js";
import { getBoardData, setBoardData, signOutFromApp } from "./config.js";
import { renderProject } from "./render_project.js";
import { renderTopics } from "./render_topics.js";
import {butttonFunctionality} from "./buttons.js"
// import { enableDnD } from "./drag_n_drop.js";


//setBoardData(board, userData)
getBoardData(userData);

// button_check();
// create_task_event();

// cancel_task_event();
// enableDnD();
// done_task_event();
addOnClick("header_link", (e) => {

    e.preventDefault();
    signOutFromApp();
    window.location.href = 'login.html';

});
//------------------------------------------------------- AFTER BUG FIX UNCOMMENT
export const ChangeBoard = (data) => {

    board = data.board;
    var tasks = document.getElementsByClassName("tasks")[0];
    var topics = document.getElementById("my_tasks");
    topics.innerHTML = renderTopics(board);
    tasks.innerHTML = renderProject(board.projects[0].sections);

}

// // setBoardData(board,userData);


//     // create_task_event();
    
//     // cancel_task_event();
//     // // enableDnD();
//     // done_task_event();
//     // trash_task_event();
//     // edit_task_event();
// //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// //set board data, after changing setBoardData(userData);
// //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // console.log("before buttons chesk")


// addOnClick("header_link", (e) => {

//     e.preventDefault();
//     signOutFromApp();
//     window.location.href = 'login.html';

// });




// export {board};