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
  showCars(cars);
  fillYearSelect();
});

brand.addEventListener("change", (e) => {
  dataSearch.marca = e.target.value;
  filterCars();
});

year.addEventListener("change", (e) => {
  dataSearch.year = e.target.value;
  filterCars();
});

minPrice.addEventListener("change", (e) => {
  dataSearch.minimo = e.target.value;
  filterCars();
});

maxPrice.addEventListener("change", (e) => {
  dataSearch.maximo = e.target.value;
  filterCars();
});

doors.addEventListener("change", (e) => {
  dataSearch.puertas = e.target.value;
  filterCars();
});

transmision.addEventListener("change", (e) => {
  dataSearch.transmision = e.target.value;
  filterCars();
});

color.addEventListener("change", (e) => {
  dataSearch.color = e.target.value;
  filterCars();
  console.log(dataSearch);
});

function showCars(cars) {
  clearHTML();
  cars.forEach((car) => {
    const { marca, modelo, year, puertas, transmision, precio, color } = car;
    const carHTML = document.createElement("p");

    carHTML.textContent = `${marca} - ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}`;

    result.appendChild(carHTML);
  });
}

function clearHTML() {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
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
  const result = cars
    .filter(filterByBrand)
    .filter(filterByYear)
    .filter(filterByNumberOfDoors)
    .filter(filterByTransmision)
    .filter(filterByColor)
    .filter(filterByMaxPrice)
    .filter(filterByMinPrice);
  if (result.length) {
    showCars(result);
  } else {
    showMessage();
  }
}

function showMessage() {
  clearHTML();
  const message = document.createElement("div");
  message.classList.add("alerta", "error");
  message.textContent = "No hay resultado";
  result.appendChild(message);
}

function filterByBrand(car) {
  const { marca } = dataSearch;
  if (marca) {
    return car.marca === marca;
  }
  return car;
}

function filterByYear(car) {
  const { year } = dataSearch;
  if (year) {
    return car.year === parseInt(year);
  }
  return car;
}

function filterByMinPrice(car) {
  const { minimo } = dataSearch;
  if (minimo) {
    return car.precio >= minimo;
  }
  return car;
}

function filterByMaxPrice(car) {
  const { maximo } = dataSearch;
  if (maximo) {
    return car.precio <= maximo;
  }
  return car;
}

function filterByNumberOfDoors(car) {
  const { puertas } = dataSearch;
  if (puertas) {
    return car.puertas === parseInt(puertas);
  }
  return car;
}

function filterByTransmision(car) {
  const { transmision } = dataSearch;
  if (transmision) {
    return car.transmision === transmision;
  }
  return car;
}

function filterByColor(car) {
  const { color } = dataSearch;
  if (color) {
    return car.color === color;
  }
  return car;
}
