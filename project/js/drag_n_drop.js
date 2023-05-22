

(() => {
  let currentDroppable = null;
  let placeholder;
  let isDraggingStarted = false;
  let movingElement;

  const processEmptySections = () => {
    // Create not visible .board-item in empty sections to dnd work with it too
    document
      .querySelectorAll(".tasks_list")
      .forEach((section) => {
        if (
          !section.querySelector(".tasks_item:not(.emptySectionHiddenLesson)")
        ) {
          const emptySectionHiddenLesson = document.createElement("div");
          emptySectionHiddenLesson.classList.add(
            "tasks_item",
            "emptySectionHiddenLesson"
          );
          section.append(emptySectionHiddenLesson);
        } else {
          const emptySectionHiddenLesson = section.querySelector(
            ".emptySectionHiddenLesson"
          );
          emptySectionHiddenLesson &&
            section.removeChild(emptySectionHiddenLesson);
        }
      });
  };

  const createPlaceholder = () => {
    // Create and position placeholder before movingElement
    placeholder = document.createElement("div");
    placeholder.classList.add("placeholder");
    movingElement.parentNode.insertBefore(placeholder, movingElement);
  };

  const onMouseMove = (event) => {
    if (!isDraggingStarted) {
      isDraggingStarted = true;
      createPlaceholder();
      Object.assign(movingElement.style, {
        position: "absolute",
        zIndex: 1000,
        border: "1px solid red",
        left: `${initialMovingElementPageXY.x}px`,
        top: `${initialMovingElementPageXY.y}px`,
      });
    }
    moveAt(movingElement, event.pageX, event.pageY);

    elementBelow = getElementBelow(movingElement, "by-center");
    if (!elementBelow) return;
    let droppableBelow = elementBelow.closest(".tasks_item");
    if (currentDroppable != droppableBelow) {
      //  currentDroppable=null
      //    if we were not over a droppable element before this event
      //  droppableBelow=null
      //    if we are not over a droppable element now, during this event
      currentDroppable = droppableBelow;
      if (currentDroppable) {
        if (
          !isAbove(movingElement, currentDroppable) ||
          currentDroppable.classList.contains("emptySectionHiddenLesson")
        ) {
          currentDroppable.parentNode.insertBefore(
            placeholder,
            currentDroppable
          );
        } else {
          currentDroppable.parentNode.insertBefore(
            placeholder,
            currentDroppable.nextElementSibling
          );
        }
      }
    }
  };

  const setMovingElement = (event) => {
    movingElement = event.target;
  };

  const onMouseUp = () => {
    if (!isDraggingStarted) {
      document.removeEventListener("mousemove", onMouseMove);
      movingElement.onmouseup = null;
      return;
    }
    console.log(
      "We move item",
      movingElement,
      "to column",
      placeholder.closest(".column"),
      "before item",
      placeholder.nextElementSibling,
      "after item",
      placeholder.previousElementSibling
    );

    placeholder.parentNode.insertBefore(movingElement, placeholder);
    Object.assign(movingElement.style, {
      position: "static",
      left: "auto",
      top: "auto",
      zIndex: "auto",
      transform: "none",
    });
    document.removeEventListener("mousemove", onMouseMove);
    isDraggingStarted = false;
    placeholder && placeholder.parentNode.removeChild(placeholder);
    movingElement.onmouseup = null;
    movingElement = null;

    // Process empty columns without items
    processEmptySections();
  };

  const onMouseDown = (event) => {
    console.log(event.target);
    document.querySelectorAll(".tasks_item").forEach(item => {
      // console.log(item.innerHTML)
      // console.log(event.target.innerHTML)
      // console.log("---------------")
      if (item.innerHTML == event.target.innerHTML) {
        setMovingElement(event);
        shifts.set(event.clientX, event.clientY, movingElement);
        initialMovingElementPageXY.set(movingElement);
        document.addEventListener("mousemove", onMouseMove);
        movingElement.onmouseup = onMouseUp;
      }
    }
    )
    document.querySelectorAll(".cross_task, .done_task").forEach(item => {
      if (event.target === item) {
        if(item.classList.contains("cross_task")) {
          item.classList.replace("cross_task", "done_task")
          item.parentElement.parentElement.querySelector(".complete_task").classList.replace("complete_task", "task")

        } else if(item.classList.contains("done_task")) {
          item.classList.replace("done_task", "cross_task")
          item.parentElement.parentElement.querySelector(".task").classList.replace("task", "complete_task")
        }
      }
    })

    // console.log(elements)
    //   var myFunction = function() {
    //     alert('something');
    //   };

    //   for (var i = 0; i < elements.length; i++) {
    //       elements[i].addEventListener('click', alert('something'), false);
    //   }

  };

  window.addEventListener("load", () => {
    for (const draggableElement of document.querySelectorAll(".tasks_item")) {
      draggableElement.onmousedown = onMouseDown;
      draggableElement.ondragstart = () => {
        return false;
      };
    }
  });





  // var element = document.getElementsByClassName("done_task")[0];
  // console.log(element)
  // console.log(document.querySelectorAll(".done_task"))
  // element.addEventListener("click", function (e) {
  //   alert('something');
  //   console.log("heli")
  // }, false);
})();




const initialMovingElementPageXY = {
  x: 0,
  y: 0,
  set: (movingElement) => {
    const rect = movingElement.getBoundingClientRect();
    initialMovingElementPageXY.x = rect.x + window.scrollX;
    initialMovingElementPageXY.y = rect.y + window.scrollY;
  },
};

// Shifts allowing drag for any point of movingElement.
// Stores x and y shifts from top left corner of movingElement to the point of drag
const shifts = {
  shiftX: 0,
  shiftY: 0,
  set: (clientX, clientY, movingElement) => {
    shifts.shiftX = clientX - movingElement.getBoundingClientRect().left;
    shifts.shiftY = clientY - movingElement.getBoundingClientRect().top;
  },
};

const moveAt = (element, pageX, pageY) => {
  // Moves element to pageX and pageY coordinates using fast CSS transform method
  element.style.transform = `translate(${pageX - initialMovingElementPageXY.x - shifts.shiftX
    }px, ${pageY - initialMovingElementPageXY.y - shifts.shiftY
    }px) rotate(-3deg)`;
};

const getElementCoordinates = (node, searchCoordsBy) => {
  // Returns left and top coordinates of node
  const rect = node.getBoundingClientRect();
  return {
    top:
      searchCoordsBy == "by-center"
        ? rect.top + rect.height / 2
        : rect.top + 10,
    left: rect.left + rect.width / 2,
  };
};

const isAbove = (nodeA, nodeB) => {
  // Returns the bounding rectangle of nodes
  const rectA = nodeA.getBoundingClientRect();
  const rectB = nodeB.getBoundingClientRect();

  return rectA.top + rectA.height / 2 < rectB.top + rectB.height / 2;
};

const isRight = (nodeA, nodeB) => {
  // Get the bounding rectangle of nodes
  const rectA = nodeA.getBoundingClientRect();
  const rectB = nodeB.getBoundingClientRect();

  return rectA.left + rectA.width / 2 < rectB.left + rectB.width / 2;
};

const getElementBelow = (movingElement, searchCoordsBy) => {
  // Get element below movingElement now
  const movingElementCenter = getElementCoordinates(
    movingElement,
    searchCoordsBy
  );
  movingElement.hidden = true;
  let elementBelow = document.elementFromPoint(
    movingElementCenter.left,
    movingElementCenter.top
  );
  movingElement.hidden = false;
  return elementBelow;
};
