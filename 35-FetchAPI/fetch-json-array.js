const loadJSONArray = document.querySelector("#load-data-json-array");

loadJSONArray.addEventListener("click", () => {
  const url = "/35-FetchAPI/data/empleados.json";

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      showResult(result);
    });
});

function showResult(array) {
  const content = document.querySelector(".body");
  let html = "";

  array.forEach((element) => {
    const { id, nombre, empresa, trabajo } = element;
    html += `
        <p>ID: ${id}</p>
        <p>Empleado: ${nombre}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>`;
  });

  content.innerHTML = html;
}
