function lower(x: string | string[]) {
  if (typeof x === 'string') {
      // `x` é garantido ser uma `string`, podemos utilizar `.toLowerCase`
      return x.toLowerCase();
  } else {
      // caso contrário, `x` é um array de strings e podemos utilizar `.reduce`
      return x.reduce((val: string, next: string) => {
          return val += `, ${next.toLowerCase()}`;
      }, '');
  }
}