const link = document.createElement('a');
link.textContent = 'Nuevo enlace';

// Insertar un elemento HTML en una posicion determinada
const nav = document.querySelector('.navegacion'); 
nav.insertBefore(link, nav.children[1]);

// Crear una card (ejercicio)
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('concierto', 'categoria');
const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Musica electronica'
parrafo2.classList.add('titulo');
const parrafo3 = document.createElement('p');
parrafo3.textContent = '$1,200 por persona';
parrafo3.classList.add('precio');

// Crear un div
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear imagen
const img = document.createElement('img');
img.src = 'img/hacer2.jpg';
img.alt = 'Texto alternativo';

// Crear card
const card = document.createElement('div')
card.classList.add('card');
card.appendChild(img);
card.appendChild(info);

const section = document.querySelector('.hacer .contenedor-cards');
section.appendChild(card);