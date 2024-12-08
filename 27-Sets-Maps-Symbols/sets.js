// Permite crear una lista de valores sin duplicados, son iterables
const carrito = new Set();
carrito.add("Camisa");
carrito.add("Disco #1");
carrito.add("Disco #2");
carrito.add("Disco #3"); // Agregar
carrito.delete("Disco #3"); // Eliminar

console.log(carrito.has("Camisa")); // Revisar si existe valor (true o false)
console.log(carrito.size); // Tamaño del set
console.log(carrito);

carrito.forEach((item) => {
  console.log(item);
});

carrito.clear(); // Limpiar el set

// Del siguiente arreglo, eliminar los duplicados

const numeros = [10, 20, 30, 40, 50, 10, 20];
const noDuplicados = new Set(numeros);
console.log(noDuplicados);
