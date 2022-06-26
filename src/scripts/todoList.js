import { onCreateTask } from './createTask.js';
import { onToggleTask } from './updateTask.js';
export const initTodoListHandlers = () => {
  const createbtnElem = document.querySelector('.create-task-btn');
  createbtnElem.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onToggleTask);
};
