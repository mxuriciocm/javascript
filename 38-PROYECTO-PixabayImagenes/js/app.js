const result = document.querySelector("#resultado");
const form = document.querySelector("#formulario");

window.addEventListener("load", () => {
  form.addEventListener("submit", validateForm);
});

function validateForm(e) {
  e.preventDefault();
  const query = document.querySelector("#busqueda").value;
  if (query === "") {
    showAlert("Ingrese un término de búsqueda");
    return;
  }

  fetchImagesByQuery(query);
}

function showAlert(message) {
  const exitsAlert = document.querySelector(".bg-red-100");
  if (!exitsAlert) {
    const alert = document.createElement("p");
    alert.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-lg",
      "mx-auto",
      "mt-6",
      "text-center"
    );

    alert.innerText = message;
    form.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 3000);
  }
}

function fetchImagesByQuery(query) {
  const url = `https://pixabay.com/api/?key=47439525-5c2e0b071b11eb06032ece351&q=${query}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      showImages(data.hits);
      console.log(data.hits);
    })
    .catch((e) => console.log(e));
}

function showImages(images) {
  clearHTML(result);
  images.forEach((image) => {
    const { pageURL, previewURL, likes, views, largeImageURL } = image;
    result.innerHTML += `<div class="w-1/2 md:w-1/3 lg:w-1/4">
                            <div class="bg-white">
                                <img class="w-full" src="${previewURL}">             
                                <div class="p-4">
                                    <p class="font-bold">${likes} <span class="font-light">Me Gustas</span></p>
                                    <p class="font-bold">${views} <span class="font-light">Veces vistas</span></p>
                                    <a class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1" href="${largeImageURL}" target="_blank" rel="noopener noreferrer">Ver imagen</a>
                                </div>
                            </div>
                        </div>`;
  });
}

function clearHTML(parameter) {
  while (parameter.firstChild) {
    parameter.removeChild(parameter.firstChild);
  }
}
