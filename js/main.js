import {TodoList} from './TodoList.js';
import {NavTodoList} from './NavTodoList.js';
import {Modal} from './Modal.js';
window.todos = [];
const todoList = new TodoList('#todolist');
const navTodoList = new NavTodoList();
const modal = new Modal('#wrapTodolist');

function addListeners() {
  document.getElementById('newTask')
    .addEventListener('click', () => {
      modal.renderModal();
    });

  document.getElementById('navTodoList')
    .addEventListener('click', e => {
      navTodoList.sortTodoList(e);
      todoList.renderTodoList(todos);
    });

  document.getElementById('todolist')
    .addEventListener('click', todoList.selectTodo);

  document.getElementById('doneTask')
    .addEventListener('click', todoList.taskIsDone)
}

addListeners();
