const loadDataJson = document.querySelector("#load-data-json");

loadDataJson.addEventListener("click", () => {
  const url = "/35-FetchAPI/data/empleado.json";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      showData(result);
    });
});

function showData(result) {
  const body = document.querySelector(".body");
  body.innerHTML = `<p>Empleado ${result.nombre}</p>
  <p>Empleado ${result.empresa}</p>
  <p>Empleado ${result.trabajo}</p>`;
}
