const numero1 = "20";
const numero2 = '20.2';
const numero3 = 'uno';
const numero4 = 20;

console.log(Number.parseInt(numero1)); // 20
console.log(Number.parseFloat(numero2)); // 20.2
console.log(Number.parseInt(numero3)) //NaN

// Verificar si es entero
console.log(Number.isInteger(numero4)) // True