class Fabric {
  // constructor() {
  //
  // }

  createEl(el = '', props = {}, child) {
    const $el = document.createElement(el);
    // $el.className = classes;
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

export {Fabric}

/*
props = {
  className: [str, str], //Array of strings
  type: '' // String
}
*/
