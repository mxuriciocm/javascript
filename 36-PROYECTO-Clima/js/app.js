const resultado = document.querySelector("#resultado");
const container = document.querySelector(".container");
const formulario = document.querySelector("#formulario");

window.addEventListener("load", (e) => {
  formulario.addEventListener("submit", buscarClima);
});

function buscarClima(e) {
  e.preventDefault();
  const ciudad = document.querySelector("#ciudad").value;
  const pais = document.querySelector("#pais").value;

  if (ciudad.trim() === "" && pais.trim() === "") {
    mostrarError("Ambos campos son obligatorios");
    return;
  }

  consultarAPI(ciudad, pais);
}

function mostrarError(mensaje) {
  const alertContainer = document.querySelector(".alert");
  const alerta = document.createElement("div");
  if (!alertContainer) {
    alerta.classList.add(
      "alert",
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-md",
      "mx-auto",
      "mt-6",
      "text-center"
    );

    alerta.innerHTML = `<span class="block">${mensaje}</span>`;
    container.appendChild(alerta);
    setTimeout(() => {
      alerta.remove();
    }, 5000);
  }
}

function consultarAPI(ciudad, pais) {
  const apiKey = "50f35af906fece202f105f99ecb6f414";
  Spinner();
  setTimeout(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if (result.cod === "404") {
          mostrarError("Ciudad no encontrada");
          return;
        }
        console.log(result);
        limpiarHTML();
        mostrarClima(result);
      })
      .catch((e) => {
        console.log(e);
      });
  }, 2000);
}

function mostrarClima(data) {
  const {
    main: { temp, temp_max, temp_min },
  } = data;
  const temperaturaActual = Number.parseInt(temp - 273.15);
  const temperaturaMaxima = Number.parseInt(temp_max - 273.15);
  const temperaturaMinima = Number.parseInt(temp_min - 273.15);

  const temperaturaHTML = document.createElement("p");
  temperaturaHTML.innerHTML = `${temperaturaActual}&deg;`;
  temperaturaHTML.classList.add("text-center", "text-6xl", "text-white");

  const temperaturaMaximaHTML = document.createElement("p");
  temperaturaMaximaHTML.innerHTML = `Temperatura máxima: ${temperaturaMaxima}&deg;`;
  temperaturaMaximaHTML.classList.add("text-center", "text-xl", "text-white");

  const temperaturaMinimaHTML = document.createElement("p");
  temperaturaMinimaHTML.innerHTML = `Temperatura mínima: ${temperaturaMinima}&deg;`;
  temperaturaMinimaHTML.classList.add("text-center", "text-xl", "text-white");

  const resultadoDiv = document.createElement("div");
  resultadoDiv.appendChild(temperaturaHTML);
  resultadoDiv.appendChild(temperaturaMaximaHTML);
  resultadoDiv.appendChild(temperaturaMinimaHTML);
  resultado.appendChild(resultadoDiv);
}

function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

function Spinner() {
  limpiarHTML();
  const divSpinner = document.createElement("div");
  divSpinner.classList.add("sk-fading-circle");
  divSpinner.innerHTML = `
  <div class="sk-circle1 sk-circle"></div>
  <div class="sk-circle2 sk-circle"></div>
  <div class="sk-circle3 sk-circle"></div>
  <div class="sk-circle4 sk-circle"></div>
  <div class="sk-circle5 sk-circle"></div>
  <div class="sk-circle6 sk-circle"></div>
  <div class="sk-circle7 sk-circle"></div>
  <div class="sk-circle8 sk-circle"></div>
  <div class="sk-circle9 sk-circle"></div>
  <div class="sk-circle10 sk-circle"></div>
  <div class="sk-circle11 sk-circle"></div>
  <div class="sk-circle12 sk-circle"></div>
    `;
  resultado.appendChild(divSpinner);
}
