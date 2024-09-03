const producto = {
  nombre: "Mauricio",
  edad: "19",
  apellido: "Chacon",
};

console.log(producto);

// Agregar nuevas propiedades al objeto

producto.imagen = "imagen.jpg";

// Eliminar una propiedad al objeto

delete producto.edad;

console.log(producto);
