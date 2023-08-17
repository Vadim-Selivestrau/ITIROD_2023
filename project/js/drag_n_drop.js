var dragItem = null;

function dragStart(event) {
  dragItem = event.target;
  event.dataTransfer.effectAllowed = 'move';
}

function dragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
}

function drop(event) {
  event.preventDefault();
  var dropItem = event.target;
  // Проверяем, что dropItem является элементом li
  if (dropItem.tagName.toLowerCase() === 'li') {
    // Меняем местами перетаскиваемый элемент и целевой элемент
    dropItem.parentNode.insertBefore(dragItem, dropItem.nextSibling);
  }
}
function enableDnD() {
    // Добавляем обработчик события dragover к контейнеру
    var tasksList = document.getElementById('tasks_list');
    tasksList.addEventListener('dragover', dragOver);
    // tasksList.addEventListener('dragstart',dragStart)
    // Добавляем обработчик события drop к контейнеру
    tasksList.addEventListener('drop', drop);
}
