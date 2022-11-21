function* ola() {
  yield 'Olá'
  yield 'Matheus'
  yield 'Castiglioni'
}

// const nome = ola()
// console.log(nome)

// const nome = ola()
// const n1 = nome.next()
// console.log(n1)

// n = next
const nome = ola()
const n1 = nome.next()
console.log(n1.value) // 'Olá'
console.log(n1.done) // false
const n2 = nome.next()
console.log(n2.value) // 'Matheus'
console.log(n2.done) // false
const n3 = nome.next()
console.log(n3.value) // 'Castiglioni'
console.log(n3.done) // false
const n4 = nome.next()
console.log(n4.value) // undefined
console.log(n4.done) // true