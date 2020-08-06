import {Fabric} from './Fabric.js';
const fabric = new Fabric();

export class TodoList {
  constructor(selector) {    
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

  renderTodoList(todos) {
    if (!todos) {
      return
    }

    this.$el.innerHTML = '';

    todos.forEach( (todo, i) => {
      const {id, date, expdate, title} = todo;

      const $item = fabric.createEl('li',
                                   {className: ['todolist-item'],
                                    'id': `${id}`
                                   }
                                  );

      const $ul = fabric.createEl('ul',
                                 {className: ['todo']}
                                );

      const $button = fabric.createEl('button',
                                     {className: ['btn', 'btn-danger'],
                                      type: 'button'
                                     },
                                     'x'
                                    );

      const fieldValues = [i + 1, date, expdate, title, $button];

      $button.addEventListener('click', (e) => this.removeTodo(e, id))

      $item.append($ul);

      fieldValues.forEach(value => {
        $ul.append( fabric.createEl('li',
                                   {className: ['todo-item', 'col']},
                                   value
                                 ));
      });

      this.$el.append($item);
    });
  }
}
