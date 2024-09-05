// Llamado entre funciones

function iniciarApp(){
    console.log('Iniciar App');
    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda funcion')
    usuarioAutenticado('Pablo')
}

function usuarioAutenticado(usuario){
    console.log('Autenticando usuario.. espere...')
    console.log(`Usuario ${usuario} autenticado exitosamente`);
}