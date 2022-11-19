console.log('texto string linha 1\n' +
'texto string linha 2');

console.log(`texto string linha 1
texto string linha 2`);

var a = 5;
var b = 10;
console.log('Quinze é ' + (a + b) + ' e\nnão ' + (2 * a + b) + '.');
// "Quinze é 15 e
// não 20."

var a = 5;
var b = 10;
console.log(`Quinze é ${a + b} e
não ${2 * a + b}.`);
// "Quinze é 15 e
// não 20."

var a = 5;
var b = 10;

function tag(strings, ...values) {
  console.log(strings[0]); // "Hello "
  console.log(strings[1]); // " world "
  console.log(values[0]);  // 15
  console.log(values[1]);  // 50

  return "Bazinga!";
}

var tagText = tag`Hello ${a + b} world ${a * b}`;
// "Bazinga!"
console.log(tagText)

function tag(strings, ...values) {
  return strings.raw[0];
}

var tagText = tag`string text line 1 \n string text line 2`;
// "string text line 1 \\n string text line 2"
console.log(tagText)

var raw = String.raw`Hi\n${2+3}!`; // "Hi\\n5!"
console.log(raw)
