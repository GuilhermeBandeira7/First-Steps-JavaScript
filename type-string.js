const texto1 = "Hello, world";
const texto2 = 'Hello, world!';
const senha = "SenhaSupersegura1234";
const citacao = 'Meu nome é ';
const meuNome = "Guilherme";

// concatenação (+)
console.log(citacao + meuNome)

// template string ou template literal

// unicode UTF-16
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// toLowerCase

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

// Length

const password = "minhaSenha123"
console.log(password.length) // 13 caracteres