// Sirve para mantener una serie de datos privados, no son iterables, tampoco contables (size), solo aceptan objetos

const producto = {
  idProducto: 10,
};

const weakmap = new WeakMap();

weakmap.set(producto, "Monitor");

console.log(weakmap.has(producto)); // true
console.log(weakmap.get(producto));
