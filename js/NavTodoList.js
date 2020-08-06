class NavTodoList {
  constructor() {

  }
  //All filters
  sortTodoList(e) {
    e.preventDefault();
    const target = e.target;
    target.classList.toggle('ascending');

    if (target.classList.contains('ascending')) {
      switch (target.dataset.filter) {
        case 'date': this.#sortAscendingByDate('date');
          break;
        case 'expdate': this.#sortAscendingByDate('expdate');
          break;
        case 'title': this.#sortAscendingByText('title');
          break;
      }
    } else {
      switch (target.dataset.filter) {
        case 'date': this.#sortDescendingByDate('date');
          break;
        case 'expdate': this.#sortDescendingByDate('expdate');
          break;
        case 'title': this.#sortDescendingByText('title');
          break;
      }
    }
  }

  #sortAscendingByDate(key) {
    todos.sort((a, b) => new Date(a[key]) - new Date(b[key]));
  }

  #sortDescendingByDate(key) {
    todos.sort((a, b) => new Date(b[key]) - new Date(a[key]));
  }

  #sortAscendingByText(key) {
    todos.sort((a, b) => a[key] > b[key] ? 1 : -1);
  }

  #sortDescendingByText(key) {
    todos.sort((a, b) => b[key] < a[key] ? -1 : 1);
  }

}

export {NavTodoList}
