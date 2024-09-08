// switch case

const metodoPago = 'efectivo';

switch (metodoPago) {
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default: //obligatorio
        console.log('Aún no has pagado o método de pago no soportado');
        break;
}