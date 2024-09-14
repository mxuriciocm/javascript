const nav = document.querySelector('.navegacion');

// Registrar un evento

nav.addEventListener('click', () => {
    console.log('Click en nav');
});

nav.addEventListener('mouseenter', () => {
    console.log('Entrando en nav');
});

nav.addEventListener('mouseout', () => {
    console.log('Saliendo de nav');
});

nav.addEventListener('mousedown', () => {
    console.log('Presionando en nav');
});

nav.addEventListener('mouseup', () => {
    console.log('Soltando en nav');
});

nav.addEventListener('dblclick', () => {
    console.log('Doble click');
});

