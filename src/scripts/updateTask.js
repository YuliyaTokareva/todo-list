import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { updateTask, getTasksList } from './tasksGateway.js';

export const onToggleTask = e => {
  //const getId = e.target.parentNode.dataset.id;
  const isCheckbox = e.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) {
    return;
  }

  const taskId = e.target.parentNode.dataset.id;
  const tasksList = getItem('tasksList');
  console.log(taskId);
  const { text, createdDate } = tasksList.find(task => task.id === taskId);
  // { text, createdDate }

  const done = e.target.checked;
  const updatedTask = {
    text,
    createdDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

//   const newTasksList = taskList.map(task => {
//     if (task.id === e.target.parentNode.dataset.id) {
//       console.log(e.target.parentNode.dataset.id);
//       const done = e.target.checked;

//       return {
//         ...task,
//         done,
//         finishDate: done ? new Date().toISOString() : null,
//       };
//     }

//     return task;
//   });

//   setItem('tasksList', newTasksList);
//   console.log(getItem('tasksList'));
//   renderTasks();
// };
//1. Prepare data
//2. Update data in server
//3. Save new to front-end storage
///5. Update UI based on new data
