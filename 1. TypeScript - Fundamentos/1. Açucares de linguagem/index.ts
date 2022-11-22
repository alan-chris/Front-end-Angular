// parâmetros opcionais
function getRange(max, min, exclusive?) {
  // ...
}

// função de seta
let obj = {
  arrow: () => {
    console.log(this);
  },
  regular: function () {
    console.log(this);
  }
};
 
obj.arrow(); // logs `window`
obj.regular(); // logs `obj`

// notações abreviadas
const foo = 'foo';
let arr = {
  // notação abreviada de identificador, igual à `foo: foo`
  foo,
  // notação abreviada para métodos, igual à `bar: function () {}`
  bar() {
  }
};
