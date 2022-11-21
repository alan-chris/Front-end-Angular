const numeroAleatorio = function() {
  return Math.random()
}

const numeroAleatorio2 = () => {
  return Math.random()
}

const numeroAleatorio3 = () => Math.random()

// --

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`
}

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`

// --

function ola(nome) {
  return `Olá ${nome}`
}

const ola = (nome) => `Olá ${nome}`

const ola = nome => `Olá ${nome}`
