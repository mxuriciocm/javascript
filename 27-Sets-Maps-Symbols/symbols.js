// Los symbols no son iguales nunca, no son iterables

const sym = Symbol();
const sym2 = Symbol();

if (sym === sym2) {
  console.log("Son iguales");
  return;
}
console.log("Son diferentes");

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

console.log(persona);
