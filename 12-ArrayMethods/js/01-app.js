const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// Comprobar si un valor existe en un arreglo

meses.forEach((mes) => {
  if (mes === "Enero") {
    console.log("Si existe Enero");
  }
  console.log(mes);
});

// Comprobar si existe en un arreglo con includes

const resultado = meses.includes("Enero");
console.log(resultado);

// Comprobar si existe en un arreglo de objetos con .some
const resultado2 = carrito.some(producto =>{
    return producto.nombre === 'Tablet'
})