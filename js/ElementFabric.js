export class ElementFabric {

  createEl(el = '', props = {}, child) {
    const $el = document.createElement(el);

    for (let prop in props) {
      if (typeof props[prop] === 'string') {
        $el[prop] = props[prop]
      } else {
        $el[prop] = props[prop].join(' ');
      }
    }

    if (child) {
      $el.append(child);
    }

    return $el;
  }
}
