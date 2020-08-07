import {ElementFabric} from './ElementFabric.js';
const elementFabric = new ElementFabric();

export class TodoList {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  selectTodo(e) {
    const target = e.target;
    const $item = target.closest('.todolist-item');

    if ($item.classList.contains('done')) {
      return
    }

    $item.classList.toggle('active');
  }

  taskIsDone() {
    const todolist = document.getElementById('todolist');
    const $activeTodos = todolist.querySelectorAll(".active");

    $activeTodos.forEach($todo => {
      const doneTodo = todos.find(todo => todo.id === +$todo.id);
      $todo.classList.remove('active');
      $todo.classList.add('done');

      if (doneTodo) {
        doneTodo.status = true;
      }
    })
  }

  removeTodo(e, id) {
    let target = e.target;

    const i = todos.findIndex(todo => todo.id === id);
    if (i === undefined) {
      return
    }

    todos.splice(i,1);

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
      const {id, data, status} = todo;
      const done = status ? 'done' : '';

      const $item = elementFabric.createEl('li',
                                   {className: ['todolist-item', `${done}`],
                                    'id': `${id}`
                                   }
                                  );

      const $ul = elementFabric.createEl('ul',
                                 {className: ['todo']}
                                );

      const $button = elementFabric.createEl('button',
                                     {className: ['btn', 'btn-danger'],
                                      type: 'button'
                                     },
                                     'x'
                                    );

      const fieldValues = [i + 1, ...Object.values(data), $button];

      $button.addEventListener('click', (e) => {
        e.stopPropagation();
        this.removeTodo(e, id);
      })

      $item.append($ul);

      fieldValues.forEach(value => {
        $ul.append( elementFabric.createEl('li',
                                   {className: ['todo-item', 'col']},
                                   value
                                 ));
      });

      this.$el.append($item);
    });
  }
}
