// Operador menor que, else if
const dinero = 500;
const totalAPagar = 300;
const tarjeta = true;

if (dinero <= totalAPagar) {
    console.log('No podemos pagar');
} else if (tarjeta) {
    console.log('Si podemos pagar con tarjeta');
} else {
    console.log('Si podemos pagar');
}