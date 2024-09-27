const result = document.querySelector("#resultado");
const year = document.querySelector("#year");
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

document.addEventListener("DOMContentLoaded", () => {
  showCars();
  fillYearSelect();
});

function showCars() {
  cars.forEach((car) => {
    const { marca, modelo, year, puertas, transmision, precio, color } = car;
    const carHTML = document.createElement("p");

    carHTML.textContent = `${marca} - ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}`;

    result.appendChild(carHTML);
  });
}

function fillYearSelect() {
  for (let i = maxYear; i >= minYear; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    year.appendChild(option);
  }
}
