const header = document.querySelector('.contenido-hero h1');
console.log(header);

//Similar a innerText, pero este método si encontrará un texto que en CSS, tenga la propiedad visibility en hidden.
console.log(header.textContent);

const header1 = document.querySelector('.contenido-hero h1').textContent;
console.log(header1);