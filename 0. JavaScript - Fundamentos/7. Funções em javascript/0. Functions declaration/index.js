function ola() {
  console.log('Olá')
}
ola()

function ola() {
  function mensagem() {
      return 'Olá'
  }
  console.log(mensagem())
}
ola()

// a função mensagem não irá existir nesse trecho de código, 
// ela somente existe dentro da função ola
// console.log(mensagem()) 

function ola(nome) {
  console.log('Olá', nome)
}
ola('Matheus')
