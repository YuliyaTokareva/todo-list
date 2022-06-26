import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateway.js';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value;
  if (!text) {
    return;
  }
  taskTitleInputElem.value = '';
  const tasksList = getItem('tasksList') || [];
  const newTask = {
    text,
    done: false,
    createdDate: new Date().toISOString(),
  };

  const newTasksList = tasksList.concat();

  createTask(newTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

//1. Prepare data
//2. write data to bd
//3. read new datd from server
//4. save new data to front-end storage
//5. update UI based on new data
