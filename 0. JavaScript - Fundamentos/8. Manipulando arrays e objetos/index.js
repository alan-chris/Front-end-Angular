// função invalida por queryAll não retorna array
document.querySelectorAll('selector').map()

// converter para array
Array.from(document.querySelectorAll('selector'))

// agora map se torna valido
Array.from(document.querySelectorAll('selector')).map()

Array.from(document.querySelectorAll('selector')).map(function(...argumentos){
  console.log(argumentos)
})

Array.from(document.querySelectorAll('selector')).map(function(elemento, indice, arrayBase){
  console.log(elemento)
})

Array.from(document.querySelectorAll('selector')).map(function(elemento, indice, arrayBase){
  console.log(elemento.querySelector('p').textContent)
})

Array.from(document.querySelectorAll('selector')).map(function(elemento, indice, arrayBase){
  const conteudo = elemento.querySelector('p').innerHTML

  return { conteudo: conteudo, cor: elemento.style.backgroundColor }
})
