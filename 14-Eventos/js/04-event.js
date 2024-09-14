const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input', (e) =>{
    console.log(e.type) // sobre que elemento estamos trabajando
 })

 busqueda.addEventListener('input', (e) =>{
    console.log(e.target); // elemento sobre el que esta
 })

 busqueda.addEventListener('input', (e)=>{
    console.log(e.target.value); // valor del input
 })

 