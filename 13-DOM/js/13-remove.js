const firstLink = document.querySelector('a');
firstLink.remove(); // Eliminar por si mismo

const nav = document.querySelector('.navegacion') // Eliminar elemento desde el padre (mas complejo)
nav.removeChild(nav.children[2]);