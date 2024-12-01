const loadDataTxtBtn = document.querySelector("#load-data-txt");

loadDataTxtBtn.addEventListener("click", () => {
  const url = "/35-FetchAPI/data/datos.txt";
  fetch(url)
    .then((response) => {
      console.log(response);
      return response.text();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
});
