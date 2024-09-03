"use strict";

const producto = {
  nombre: "Mauricio",
  edad: "19",
  apellido: "Chacon",
};

Object.freeze(producto);

producto.edad = "20";
producto.imagen = "imagen.jpg";
delete producto.edad;

console.log(producto);

console.log(Object.isFrozen(producto));
