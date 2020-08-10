import {TodoList} from './TodoList.js';
const todoList = new TodoList('#todolist');

export class Modal {
  constructor(selector) {
    this.$el = document.querySelector(selector);    
    this._div = document.getElementById('modal');
    this._saveTask = this._saveTask.bind(this);
    this._closeModal = this._closeModal.bind(this);
    this._getText = this._getText.bind(this);
    this._getExpDate = this._getExpDate.bind(this);
    this._cleanInputs = this._cleanInputs.bind(this);
    this.showModal = this.showModal.bind(this);

    this._addHandlers();
  }

  #dateToString(date) {
    let yy = date.getFullYear(),
        mm = date.getMonth() + 1,
        dd = date.getDate();

    mm = mm.toString().padStart(2, '0');
    dd = dd.toString().padStart(2, '0');

    return `${yy}-${mm}-${dd}`;
  }

  _addHandlers = () => {
    this._div.addEventListener('click', this._closeModal);
    this._div.addEventListener('click', this._saveTask);
  }


  showModal() {
    const $curDate = this._div.querySelector('.current_date');
    let html = '';

    $curDate.innerHTML = '';
    this._div.style.display = 'block';

    html = `<b>${this.#dateToString(new Date())}</b>`;
    $curDate.insertAdjacentHTML('afterbegin', html);
  }

  _saveTask(e) {
    const target = e.target;
    const button = target.closest('button');

    if (button && button.dataset.save) {
      if (!this._getText()) {
        alert('Enter a task plese');

        return
      }

      todos.push({
          id: Date.now(),
          data: {
            date: this.#dateToString(new Date()),
            expdate: this._getExpDate(),
            title: this._getText(),
          },
          status: false,
        });

      this._div.style.display = 'none';
      this._cleanInputs();

      todoList.renderTodoList(todos);
    }
  }

  _closeModal(e) {
    const target = e.target;
    const button = target.closest('button');

    if (button && button.dataset.dismiss) {
      this._div.style.display = 'none';
      this._cleanInputs();
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

  _cleanInputs() {
    const $inputs = this._div.querySelectorAll('input');

    $inputs.forEach($input => $input.value = '');
  }

}
