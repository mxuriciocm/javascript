const producto = {
  nombre: "Mauricio",
  edad: "19",
  apellido: "Chacon",
  hobbies: {
    ocio: "videojuegos",
    deportes: "futbol",
  },
};

const { hobbies, hobbies: {ocio}} = producto;

console.log(ocio);