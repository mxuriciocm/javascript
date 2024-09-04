// Añadir elementos al final y al inicio del array

const carrito = [];

const producto = {
  nombre: "Monitor 32 pulgadas",
  precio: 300,
};

const producto1 = {
  nombre: "Celular",
  precio: 800,
};

// Forma imperativa, no modifica carrito

resultado = [...carrito, producto];

console.log(resultado);