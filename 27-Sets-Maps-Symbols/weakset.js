// Solo se le puede pasar objetos, no son iterables y no se puede conocer su longitud (no existe metodo size)

const weakset = new WeakSet();

const client = {
  name: "Mauricio",
  balance: 100,
};

weakset.add(client);

console.log(weakset);
