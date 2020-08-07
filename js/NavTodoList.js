export class NavTodoList {  

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
    todos.sort((a, b) => new Date(a.data[key]) - new Date(b.data[key]));
  }

  #sortDescendingByDate(key) {
    todos.sort((a, b) => new Date(b.data[key]) - new Date(a.data[key]));
  }

  #sortAscendingByText(key) {
    todos.sort((a, b) => a.data[key] > b.data[key] ? 1 : -1);
  }

  #sortDescendingByText(key) {
    todos.sort((a, b) => b.data[key] < a.data[key] ? -1 : 1);
  }

}
