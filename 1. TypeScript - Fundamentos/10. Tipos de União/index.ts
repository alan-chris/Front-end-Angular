function byId(element: string | Element): Element {
  if (typeof element === 'string') {
    return document.getElementById(element);
  }
  else {
    return element;
  }
}
