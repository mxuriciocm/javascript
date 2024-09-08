const efectivo = 300;
const credito = 1400;
const disponible = efectivo + credito;
const totalAPagar = 600;

if ( efectivo > totalAPagar || credito > totalAPagar){
    console.log('Si podemos pagar con efectivo');
} else {
    console.log('No podemos pagar con efectivo');
}