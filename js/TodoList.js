import {FabricComponent} from './FabricComponent.js';
const fabricComponent = new FabricComponent();

class TodoList {
  constructor(selector) {
    this.$el = document.querySelector(selector);
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
      const {id, date, expdate, title} = todo;

      const $item = fabricComponent.createEl('li',
                                   {className: ['todolist-item'],
                                    'id': `${id}`
                                   }
                                  );

      const $ul = fabricComponent.createEl('ul',
                                 {className: ['todo']}
                                );

      const $button = fabricComponent.createEl('button',
                                     {className: ['btn', 'btn-danger'],
                                      type: 'button'
                                     },
                                     'x'
                                    );

      const fieldValues = [i + 1, date, expdate, title, $button];

      $button.addEventListener('click', (e) => this.removeTodo(e, id))

      $item.append($ul);

      fieldValues.forEach(value => {
        $ul.append( fabricComponent.createEl('li',
                                   {className: ['todo-item', 'col']},
                                   value
                                 ));
      });

      this.$el.append($item);
    });
  }
}

export {TodoList}
