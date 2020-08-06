import {Fabric} from './Fabric.js';
const fabric = new Fabric();

export class TodoList {
  constructor(selector) {
    // this.todos = todos;
    // this.removeTodo = this.removeTodo.bind(this);
    this.$el = document.querySelector(selector);
  }

  removeTodo(e, id) {
    let target = e.target;

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        todos.splice(i,1);

        break;
      }
    }

    while (this.$el !== target) {
      if (+target.id === id) {
        target.remove();

        break;
      }

      target = target.parentElement;
    }
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

    // const todolist = document.getElementById('todolist');
    // let html = '';
    // const self = this;
    // const {todos} = this;
    this.$el.innerHTML = '';

    todos.forEach( (todo, i) => {
      // const {id, date, expdate, title} = todo;
      const {id} = todo;
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
      const item = fabric.createEl('li',
                                   {className: ['todolist-item'],
                                    'id': `${id}`
                                   }
                                  );

      const ul = fabric.createEl('ul',
                                 {className: ['todo']}
                                );

      const button = fabric.createEl('button',
                                     {className: ['btn', 'btn-danger'],
                                      type: 'button'
                                     },
                                     'x'
                                    );

      button.addEventListener('click', (e) => this.removeTodo(e, id))

      item.append(ul);

      for (let key in todo) {
        ul.append( fabric.createEl('li',
                                   {className: ['todo-item', 'col']},
                                   todo[key]
                                  ))
      }

      ul.append(fabric.createEl('li',
                                {className: ['todo-item', 'col']},
                                button
                               ));

      this.$el.append(item);
    });
    //
    // this.$el.innerHTML = html;



    // <button class="btn btn-danger" type="button" data-id="${id}" onclick="(() => this.removeTodo(${id}))()">&times;</button>
    // this.addEvent();
  }
}
