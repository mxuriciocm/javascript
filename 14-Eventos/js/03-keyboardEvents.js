const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown', () => {
    console.log('Escribiendo...');
});

busqueda.addEventListener('blur', () => {
    console.log('Terminaste de escribir');
});

busqueda.addEventListener('copy', () => {
    console.log('Copiando texto');
});

busqueda.addEventListener('paste', () => {
    console.log('Pegando texto');
});

busqueda.addEventListener('cut', () => {
    console.log('Cortando texto');
});

busqueda.addEventListener('input', () => { // Se ejecuta cuando se copia, pega o corta texto
    console.log('Input');
});

