const brand = document.querySelector("#marca");
const year = document.querySelector("#year");
const minPrice = document.querySelector("#minimo");
const maxPrice = document.querySelector("#maximo");
const doors = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");
const result = document.querySelector("#resultado");
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

const dataSearch = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

document.addEventListener("DOMContentLoaded", () => {
  showCars();
  fillYearSelect();
});

brand.addEventListener("change", (e) => {
  dataSearch.marca = e.target.value;
  filterCars();
  console.log(dataSearch);
});

year.addEventListener("change", (e) => {
  dataSearch.year = e.target.value;
});

minPrice.addEventListener("change", (e) => {
  dataSearch.minimo = e.target.value;
});

maxPrice.addEventListener("change", (e) => {
  dataSearch.maximo = e.target.value;
});

doors.addEventListener("change", (e) => {
  dataSearch.puertas = e.target.value;
});

transmision.addEventListener("change", (e) => {
  dataSearch.transmision = e.target.value;
});

color.addEventListener("change", (e) => {
  dataSearch.color = e.target.value;
  console.log(dataSearch);
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

function filterCars() {
  const result = cars.filter(filterBrand);
  console.log(result)
}

function filterByBrand(car) {
  const {marca} = dataSearch
  if (marca) {
    return car.marca === marca;
  }
  return car;
}
