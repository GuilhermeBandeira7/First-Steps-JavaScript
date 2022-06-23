// conversão implícita

const numero = 456;
const numeroString = '456';

console.log(numero == numeroString); // == makes the implicit conversion
//Number()
//String()
console.log(numero + Number(numeroString)) // using method Number to turn a string into a number
// conversão explícita 