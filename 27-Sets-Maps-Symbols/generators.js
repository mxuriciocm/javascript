function* createGenerator() {
  yield 1;
  yield "Mauricio";
  yield 3 * 3;
  yield true;
}

const iterator = createGenerator();

console.log(iterator.next());

// Generator for shopping cart
function* createGeneratorCar(car) {
  for (let i = 0; i < car.length; i++) {
    yield car[i];
  }
}

const car = ["Producto1", "Producto 2", "Producto3"];

const iterator1 = createGenerator(car);
console.log(iterator.next());
