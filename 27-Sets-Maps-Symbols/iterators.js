function createIterator(car) {
  let i = 0;
  return {
    next: () => {
      const end = i >= car.length;
      const value = end ? car[i++] : undefined;

      return {
        end,
        value,
      };
    },
  };
}

const cars = ["Product 1", "Product 2", "Product 3"];

// Use iterator
const recorrerCar = createIterator(cars);

console.log(recorrerCar.next());
console.log(recorrerCar.next());
console.log(recorrerCar.next());
console.log(recorrerCar.next());
console.log(recorrerCar.next());
