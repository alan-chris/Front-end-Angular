async function request() {
  const resultado = await fetch('https://api.github.com/users/omariosouto')
  const resultadoConvertido = await resultado.json()
  console.log(resultadoConvertido)
}
request()

const dados = fetch('https://api.github.com/users/omariosouto')
.then(res => res.json())
.then(resJson => console.log(resJson))