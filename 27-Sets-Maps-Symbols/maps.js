// Listas ordenadas de llave y valor, permite cualquier tipo de dato en la llave y en el valor, son iterables.

const client = new Map();

client.set("nombre", "Karen");
client.set("tipo", "Premiun");
client.set("saldo", 300);

console.log(client.size); // 3
console.log(client.has("nombre2")); // false
console.log(client.get("nombre")); // Karen
client.delete("saldo");
client.clear();

console.log(client);

const paciente = new Map([
  ["nombre", "paciente"],
  ["cuarto", "no definido"],
]);

paciente.set("dr", "Dr asignado");
paciente.set("nombre", "Mauricio"); // se sobreescribe al tener el mismo key

console.log(paciente);
paciente.forEach((value, key) => {
  console.log(value);
  console.log(key);
});
