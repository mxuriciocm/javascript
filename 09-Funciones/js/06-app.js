// Parametros por default
function saludar(nombre, apellido = 'sin apellido') {
    console.log(`Hola ${nombre} ${apellido}`);
  }
  
  saludar('mauricio');