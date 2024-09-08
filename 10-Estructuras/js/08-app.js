const autenticacion = true;

if (autenticacion) {
  console.log("El usuario esta autenticado");
}

const puntaje = 400;

function revisarPuntaje() {
  if (puntaje > 400) {
    console.log("Excelente!");
    return;
  }
  if (puntaje > 300) {
    console.log("Buen puntaje");
    return;
  }
}

revisarPuntaje();
