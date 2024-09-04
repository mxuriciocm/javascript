const carrito = ['Procesador', 'Celular']
carrito.pop();

console.log(carrito) // ['Procesador']


const carrito1 = ['Procesador', 'Celular']
carrito1.shift();

console.log(carrito1) // ['Celular']

const carrito2 = ['Procesador', 'Tablet', 'Celular']
carrito2.splice(1,2);
console.log(carrito2) // ['Procesador']