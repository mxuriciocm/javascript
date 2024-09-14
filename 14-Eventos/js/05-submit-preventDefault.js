const formulario = document.querySelector('#formulario');
// Funcion anonima
formulario.addEventListener('submit', (e) =>{ // presiona el input o el button que tiene el tipo submit
    e.preventDefault();  // evitar que el navegador haga lo que tiene que hacer y hacerlo por cuenta propia. te permite que no se abra lo que esta en el action y no se envie los datos via metodo post o metodo get, sino que tu hagas las validaciones.
    console.log();
})

// Declaracion de funcion
formulario.addEventListener('submit', validarFormulario);
function validarFormulario(e){
    e.preventDefault();
    console.log();
}