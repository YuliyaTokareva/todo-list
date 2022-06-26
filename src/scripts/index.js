import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './renderer.js';
import { getTasksList } from './tasksGateway.js';
import { setItem } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then(tasksList => {
    setItem('tasksList', tasksList);

    renderTasks();
  });

  initTodoListHandlers();
});

const onStarageChange = e => {
  if (e.key !== 'tasksList') {
    return;
  }
  renderTasks();
};
window.addEventListener('storage', onStarageChange);

///1.Get data from server
///2.Save data to front-end storage
