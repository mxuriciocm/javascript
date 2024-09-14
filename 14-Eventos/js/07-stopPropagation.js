const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

// Eventbubbling => Es cuando presionas en un elemento y se disparan los otros eventos, los eventos se dispersan a un elemento padre
cardDiv.addEventListener('click', () =>{
    console.log('click en card');
})

infoDiv.addEventListener('click', () =>{
    console.log('click en info');
})

titulo.addEventListener('click', () =>{
    console.log('click en titulo');
})

// Prevenir eventBubbling
cardDiv.addEventListener('click', (e) =>{
    e.stopPropagation();
    console.log('click en card');
})

infoDiv.addEventListener('click', () =>{
    e.stopPropagation();
    console.log('click en info');
})

titulo.addEventListener('click', () =>{
    e.stopPropagation();
    console.log('click en titulo');
})