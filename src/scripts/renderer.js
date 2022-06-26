//import { createCheckboxElem } from './checkbox.js';
import { getItem } from './storage.js';

const listElem = document.querySelector('.list');
export const renderTasks = () => {
  const tasksList = getItem('tasksList') || [];
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      listItemElem.setAttribute('data-id', `${id}`);
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      const textElem = document.createElement('span');
      textElem.classList.add('list__item-text');
      textElem.textContent = text;

      const deleteBtnElem = document.createElement('button');
      deleteBtnElem.classList.add('list__item-delete-btn');
      listItemElem.append(checkbox, textElem, deleteBtnElem);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};
