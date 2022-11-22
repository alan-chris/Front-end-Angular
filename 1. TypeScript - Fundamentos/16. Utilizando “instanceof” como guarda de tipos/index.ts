function clearElement(element: string | HTMLElement) {
  if (element instanceof HTMLElement) {
      // garantimos que `element` é do tipo `HTMLElement`
      // então podemos acessar a propriedade `.innerHTML` 
      element.innerHTML = '';
  } else {
      // caso contrário, `element` é uma `string` e podemos passá-la diretamente 
      // para `document.querySelector`
      const el = document.querySelector(element);
      el && el.innerHTML = '';
  }
}
