const loadAPI = document.querySelector("#load-data-json-api");
loadAPI.addEventListener("click", () => {
  const url = "https://picsum.photos/list";

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      showResult(result);
    });
});

function showResult(array) {
  const body = document.querySelector(".body");
  let html = "";

  array.forEach((element) => {
    const { author, author_url } = element;

    html += `<p>Author ${author}</p>
             <a href='${author_url}' target="_blank">Ver imagen</a>
            `;
  });

  body.innerHTML = html;
}
