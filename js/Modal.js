import {TodoList} from './TodoList.js';
const todoList = new TodoList('#todolist');

class Modal {
  constructor(selector) {
    this.$el = document.querySelector(selector);
    this._div = document.createElement('div');
    this._saveTask = this._saveTask.bind(this);
    this._closeModal = this._closeModal.bind(this);
    this._getText = this._getText.bind(this);
    this._getExpDate = this._getExpDate.bind(this);
  }

  #dateToString(date) {
    let yy = date.getFullYear(),
        mm = date.getMonth() + 1,
        dd = date.getDate();

    mm = mm.toString().padStart(2, '0');
    dd = dd.toString().padStart(2, '0');
    // mm = mm.length > 1
    //   ? mm
    //   : '0' + mm;
    // dd = dd.length > 1
    //   ? dd
    //   : '0' + dd;

    return `${yy}-${mm}-${dd}`;
  }


  renderModal() {
    // const wrapTodolist = document.querySelector('#wrapTodolist');
    // const div = document.createElement('div');
    let html = '';
    this._div.innerHTML = '';
    this._div.style.display = 'block';
    this._div.classList.add('modal');

    html = `
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title">Create todo</h3>
            <button type="button" class="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <input type="text" class="modal-input" placeholder="Your text">
            <div class="modal-group">
              <p>Current date:</p>
              <p><b>${this.#dateToString(new Date())}</b></p>
            </div>
            <div class="modal-group">
              <p>Expiration date:</p>
              <input type="date" >
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" data-save="modal">Save</button>
          </div>
        </div>
      </div>
    `;

    this._div.insertAdjacentHTML('afterbegin', html);
    this.$el.append(this._div);

    this._div.addEventListener('click', this._closeModal);
    this._div.addEventListener('click', this._saveTask);
  }

  _saveTask(e) {
    const target = e.target;
    const button = target.closest('button');

    if (button && button.dataset.save) {
      if (!this._getText()) {
        alert('Enter a task plese');

        return
      }

      this._div.style.display = 'none';
      this._div.removeEventListener('click', this._saveTask);
      this._div.remove();

      todos.push({
          id: Date.now(),
          date: this.#dateToString(new Date()),
          expdate: this._getExpDate(),
          title: this._getText()
        });
    }

    todoList.renderTodoList(todos);
  }

  _closeModal(e) {
    const target = e.target;
    const button = target.closest('button');

    if (button && button.dataset.dismiss) {
      this._div.style.display = 'none';
      this._div.removeEventListener('click', this._closeModal);
      this._div.remove();
    }
  }

  _getText() {
    const text = this._div.querySelector('input[type="text"]');

    return text.value
  }

  _getExpDate() {
    const input = this._div.querySelector('input[type="date"]');

    return input.value || this.#dateToString(new Date());
  }

}

export {Modal}
