const newTask = document.getElementById('newTask');
const wrapTodolist = document.getElementById('wrapTodolist');
const navTodoList = document.getElementById('navTodoList');
const todolist = document.getElementById('todolist');
// const todos = [
//   {
//     id: new Date(),
//     date: new Date(),
//     expDate: new Date(),
//     title: 'Task1'
//   }
// ];
const todos = [];

function dateToString(date) {
  let yy = date.getFullYear(),
  mm = date.getMonth(),
  dd = date.getDay();

  mm = mm.length > 1 ? mm : '0' + mm;
  dd = dd.length > 1 ? dd : '0' + dd;

  return `${yy}-${mm}-${dd}`;
}

function addTask() {
  const div = document.createElement('div');
  div.style.display = 'block';
  div.classList.add('modal');

  const html = `
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

    if(button && button.dataset.dismiss) {
      div.style.display = 'none';
      div.remove();
    }
  }

  function saveTask(e) {
    const target = e.target;
    const button = target.closest('button');

    if(button && button.dataset.save) {
      if(!getText()) {
        alert('Enter a task plese');
        return
      }

      div.style.display = 'none';
      div.remove();

      todos.push({
          id: Date.now(),
          date: dateToString(new Date()),
          expDate: getExpDate(),
          title: getText()
        });
    }

    renderTodoList();
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

newTask.addEventListener('click', addTask);

function renderTodoList() {
  // if(!todos.length) {
  //   navTodoList.style.display = 'none';
  // } else {
  //   navTodoList.style.display = '';
  // }

  // const ul = document.createElement('ul');
  // ul.classList.add('todolist-item');

  let html = '';
  todolist.innerHTML = '';

  todos.forEach(({id, date, expDate, title}, i) => {
    html += `
      <li class="todolist-item">
        <ul class="todo">
          <li class="todo-item col" >${i + 1}</li>
          <li class="todo-item col" >${date}</li>
          <li class="todo-item col" >${expDate}</li>
          <li class="todo-item col" >${title}</li>
          <li class="todo-item col" >
            <button class="btn btn-danger" type="button" onclick="removeTodo(${id})">&times;</button>
          </li>
        </ul>
      </li>
    `
  });

  todolist.innerHTML = html;

  // wrapTodolist.append(ul);
}

function removeTodo(id) {
  console.log(todos);
  for(let i = 0; i < todos.length; i++) {
    if(todos[i].id === id) {
      todos.splice(i,1);
      break;
    }
  }
  console.log(todos);
  renderTodoList();
}

function sortTodoList(e) {
  e.preventDefault();
  const target = e.target;
  target.classList.toggle('increase');

  if(target.classList.contains('increase')) {
    if(target.dataset.date) {
      todos.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if(target.dataset.expdate) {
      todos.sort((a, b) => new Date(b.expDate) - new Date(a.expDate))
    } else if(target.dataset.index) {
        todos.reverse();
    }
  } else {
    if(target.dataset.date) {
      todos.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if(target.dataset.expdate) {
      todos.sort((a, b) => new Date(a.expDate) - new Date(b.expDate))
    } else if(target.dataset.index) {
        todos.reverse();
    }
  }

  renderTodoList();
}

navTodoList.addEventListener('click', sortTodoList);

renderTodoList();
