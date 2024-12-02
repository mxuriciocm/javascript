const categoryInput = document.querySelector("#categorias");
const result = document.querySelector("#resultado");

window.addEventListener("load", () => {
  categoryInput.addEventListener("change", fetchMealsByCategories);
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      showCategories(data.categories);
      console.log(data);
    })
    .catch((e) => console.log(e));
});

function showCategories(array) {
  array.forEach((element) => {
    const { strCategory, idCategory } = element;
    const options = document.createElement("option");
    options.value = strCategory;
    options.textContent = strCategory;
    categoryInput.appendChild(options);
  });
}

function fetchMealsByCategories(e) {
  const category = e.target.value;
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      clearHTML();
      showMealsByCategories(data.meals);
    })
    .catch((e) => console.log(e));
}

function showMealsByCategories(array) {
  const cardMealContainer = document.createElement("div");
  cardMealContainer.classList.add("flex");
  array.forEach((element) => {
    const { strMeal, strMealThumb, idMeal } = element;
    const cardMeal = document.createElement("div");
    cardMeal.innerHTML = `<img src="${strMealThumb}" alt="${strMeal}">
                          <p>${strMeal}</p>`;
    cardMealContainer.appendChild(cardMeal);
  });
  result.appendChild(cardMealContainer);
}

function clearHTML() {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
}
