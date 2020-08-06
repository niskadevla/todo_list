import {TodoList} from './TodoList.js';
import {NavTodoList} from './NavTodoList.js';
window.todos = [];
const todoList = new TodoList('#todolist');
const navTodoList = new NavTodoList();
// const {renderTodoList} = todoList;
// console.dir(renderTodoList);

// const todos = [
//   {
//     id: new Date(),
//     date: new Date(),
//     expdate: new Date(),
//     title: 'Task1'
//   }
// ];


//Add Listeners
(function() {
  document.getElementById('newTask')
    .addEventListener('click', addTask);

  document.getElementById('navTodoList')
    .addEventListener('click', (e) => {
      navTodoList.sortTodoList(e);
      todoList.renderTodoList(todos);
    })
})();

function dateToString(date) {
  let yy = date.getFullYear(),
      mm = date.getMonth() + 1,
      dd = date.getDate();

  mm = mm.length > 1
    ? mm
    : '0' + mm;
  dd = dd.length > 1
    ? dd
    : '0' + dd;

  return `${yy}-${mm}-${dd}`;
}


function addTask() {
  const wrapTodolist = document.getElementById('wrapTodolist');
  const div = document.createElement('div');
  let html = '';
  div.style.display = 'block';
  div.classList.add('modal');

  html = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <textarea class="modal-title" placeholder="Your text"></textarea>
          <button type="button" class="close" data-dismiss="modal">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Current date</p>
          <p><b>${dateToString(new Date())}</b></p>
          <p>Expiration date:</p>
          <input type="date" >
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-save="modal">Save changes</button>
        </div>
      </div>
    </div>
  `;

  div.innerHTML = html;
  wrapTodolist.append(div);

  div.addEventListener('click', closeModal);
  div.addEventListener('click', saveTask);

  function closeModal(e) {
    const target = e.target;
    const button = target.closest('button');

    if (button && button.dataset.dismiss) {
      div.style.display = 'none';
      div.remove();
    }
  }

  function saveTask(e) {
    const target = e.target;
    const button = target.closest('button');

    if (button && button.dataset.save) {
      if (!getText()) {
        alert('Enter a task plese');

        return
      }

      div.style.display = 'none';
      div.remove();

      todos.push({
          id: Date.now(),
          date: dateToString(new Date()),
          expdate: getExpDate(),
          title: getText()
        });
    }

    todoList.renderTodoList(todos);
  }

  function getText() {
    const text = div.querySelector('textarea');

    return text.value
  }

  function getExpDate() {
    const input = div.querySelector('input[type="date"]');

    return input.value || dateToString(new Date());
  }
}
