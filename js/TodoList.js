export class TodoList {
  constructor() {
    // this.todos = todos;
    // this.removeTodo = this.removeTodo.bind(this);
  }

  removeTodo(id) {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        todos.splice(i,1);

        break;
      }
    }

    this.renderTodoList(todos);
  }

  createEl(el = '', classes = '', child) {
    const $el = document.createElement(el);
    $el.className = classes;

    if (child) {
      $el.append(child);
    }

    return $el;
  }

  // addEvent() {
  //   // ${self.removeTodo(id)}
  //   const btns = document.querySelectorAll('.btn-danger');
  //
  //   btns.forEach((btn) => {
  //     btn.addEventListener('click', this.removeTodo(btn.dataset.id))
  //   })
  // }

  renderTodoList(todos) {
    if (!todos) {
      return
    }

    const todolist = document.getElementById('todolist');
    let html = '';
    const self = this;
    // const {todos} = this;
    todolist.innerHTML = '';

    todos.forEach( (todo, i) => {
      const {id, date, expdate, title} = todo;
      // const button = document.createElement('button');
      // button.clasName = 'btn btn-danger';
      // button.type = 'button';
      // button.onclick = () => this.removeTodo(id);
      // button.innerHTML = '&times;';
      // onRemove = this.removeTodo.bind(this);
      // console.log(onRemove);



    //   html += `
    //     <li class="todolist-item">
    //       <ul class="todo">
    //         <li class="todo-item col" >${i + 1}</li>
    //         <li class="todo-item col" >${date}</li>
    //         <li class="todo-item col" >${expdate}</li>
    //         <li class="todo-item col" >${title}</li>
    //         <li class="todo-item col" >
    //           <button class="btn btn-danger" type="button" onclick="onRemove()">&times;</button>
    //         </li>
    //       </ul>
    //     </li>
    //   `;
    //
      const item = this.createEl('li', 'todolist-item');
      todolist.append(item);
      const ul = this.createEl('ul', 'todo');
      item.append(ul);

      for(let key in todo) {
        ul.append( this.createEl('li', 'todo-item col', todo[key]) )
      }

      // Object.keys(todo).forEach(text => {
      //   ul.append( this.createEl('li', 'todo-item col', text) )
      // })
      const button = this.createEl('button',
                              'btn btn-danger',
                              'x');

      ul.append(this.createEl('li',
                              'todo-item col',
                              button
                ));

      todolist.append(item);
    });
    //
    // todolist.innerHTML = html;



    // <button class="btn btn-danger" type="button" data-id="${id}" onclick="(() => this.removeTodo(${id}))()">&times;</button>
    // this.addEvent();
  }
}
