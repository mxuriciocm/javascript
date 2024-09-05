// Diferencias de funciones con funciones flecha (arrow functions)
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

// Arrow Functions

// Map

const newArray3 = carrito.map((producto) =>{
    return `${producto.nombre} - Precio ${producto.precio}`
})

// ForEach

const newArray4 = carrito.forEach((producto) =>{
    return `${producto.nombre} - Precio ${producto.precio}`
})