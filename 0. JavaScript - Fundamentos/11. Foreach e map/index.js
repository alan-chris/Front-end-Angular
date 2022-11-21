const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

for(let i = 0; i < nomes.length; i++ ) {
    console.log('[for]', nomes[i]);
}

nomes.forEach(function(nome, i) {
    console.log('[forEach]', nome, i);
})

nomes.map(function(nome, i) {
  console.log('[map]', nome, i);
})

// - -

function nossoForEach(arr, funcao) {
  for(let i = 0; i < arr.length; i = i + 1) {
      funcao(arr[i], i);
  }
}

nossoForEach(['nome', 'nome2'], function(nome, indice) {
  console.log(nome, indice)
})

// - -

const nomes2 = ['Whinds', 'Freeway', 'Teste', 'Maria'];

const retornoForEach = nomes2.forEach((nomeAtual) => {
    console.log(nomeAtual);

    return nomeAtual.toUpperCase();
})
console.log(retornoForEach) // undefined

const nomes3 = ['Whinds', 'Freeway', 'Teste', 'Maria'];

const retornoMap = nomes3.map((nomeAtual) => {
    console.log(nomeAtual);

    return nomeAtual.toUpperCase();
})
console.log(retornoMap) // ['WHINDS', 'FREEWAY', 'TESTE', 'MARIA']

// - -

function nossoMap(arr, funcao) {
  const novoArray = [];
  for(let i = 0; i < arr.length; i = i + 1) {   
      novoArray.push(funcao(arr[i], i));
  }    
  return novoArray
}

nossoMap(['nome', 'nome2'], function(nome, indice) {
  console.log(nome, indice)
})
