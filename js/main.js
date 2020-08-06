import {TodoList} from './TodoList.js';
import {NavTodoList} from './NavTodoList.js';
import {Modal} from './Modal.js';
window.todos = [];
const todoList = new TodoList('#todolist');
const navTodoList = new NavTodoList();
const modal = new Modal('#wrapTodolist');

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
    .addEventListener('click', () => {
      modal.renderModal();
      // todoList.renderTodoList(todos);
    });

  document.getElementById('navTodoList')
    .addEventListener('click', (e) => {
      navTodoList.sortTodoList(e);
      todoList.renderTodoList(todos);
    })
})();
