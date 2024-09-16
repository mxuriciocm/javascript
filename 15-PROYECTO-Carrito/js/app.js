const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const containerCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");

loadEventListeners();
function loadEventListeners() {
  listaCursos.addEventListener("click", addCourse);
}

function addCourse(e){
    if (e.target.classlist.contains('agregar-carrito')){
        console.log('add course...')
    }
}
