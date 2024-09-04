const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// Map

const newArray = carrito.map(function (producto) {
  return `${producto.nombre} - Precio: ${producto.precio}`;
});

// ForEach
const newArray2 = carrito.forEach(function (producto) {
  return `${producto.nombre} - Precio: ${producto.precio}`;
});

console.log(newArray);
console.log(newArray2);
