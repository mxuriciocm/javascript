const header = document.querySelector('.contenido-hero h1');
console.log(header);

// 1era forma; No encontrará un texto que en CSS, tenga la propiedad visibility en hidden.
console.log(header.innerText);

// Tambien se puede usar antes
const header1 = document.querySelector('.contenido-hero h1').innerText;
console.log(header1);