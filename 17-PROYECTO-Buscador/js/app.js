const result = document.querySelector("#resultado");

document.addEventListener("DOMContentLoaded", () => {
  showCars();
});

function showCars() {
  cars.forEach((car) => {
    const {marca, modelo, year, puertas, transmision, precio, color} = car;
    const carHTML = document.createElement("p");
  
    carHTML.textContent = `${marca} - ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}`;

    result.appendChild(carHTML);
  });
}
