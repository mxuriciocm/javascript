const categoryInput = document.querySelector("#categorias");
const result = document.querySelector("#resultado");
const modal = new bootstrap.Modal("#modal", {});

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
      showMealsByCategories(data.meals);
    })
    .catch((e) => console.log(e));
}

function showMealsByCategories(recipes) {
  clearHTML(result);
  const heading = document.createElement("h2");
  heading.classList.add("text-center", "text-black", "my-5");
  heading.textContent = recipes.length ? "Results" : "No Results";
  result.appendChild(heading);

  recipes.forEach((recipe) => {
    const { strMeal, strMealThumb, idMeal } = recipe;
    const recipeContainer = document.createElement("div");
    recipeContainer.classList.add("col-md-4");

    const recipeCard = document.createElement("div");
    recipeCard.classList.add("card", "mb-4");

    const recipeImage = document.createElement("img");
    recipeImage.classList.add("card-img-top");
    recipeImage.alt = `Recipe image ${strMeal}`;
    recipeImage.src = `${strMealThumb}`;

    const recipeBody = document.createElement("div");
    recipeBody.classList.add("card-body");

    const recipeTitle = document.createElement("h3");
    recipeTitle.classList.add("card-title", "mb-3");
    recipeTitle.textContent = `${strMeal}`;

    const recipeButton = document.createElement("button");
    recipeButton.classList.add("btn", "btn-danger", "w-100", "btn-recipe");
    recipeButton.textContent = "Show recipe";
    recipeButton.dataset.bsTarget = "#modal";
    recipeButton.dataset.bsToggle = "modal";
    recipeButton.onclick = function () {
      fetchRecipeInfoById(idMeal);
    };

    recipeBody.appendChild(recipeTitle);
    recipeBody.appendChild(recipeButton);

    recipeCard.appendChild(recipeImage);
    recipeCard.appendChild(recipeBody);

    recipeContainer.appendChild(recipeCard);

    result.appendChild(recipeContainer);
  });
}

function fetchRecipeInfoById(id) {
  fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json())
    .then((data) => {
      showRecipeInfoById(data.meals[0]);
      console.log(data);
    })
    .catch((error) => console.log(error));
}

function showRecipeInfoById(info) {
  console.log(info);
  const { strMeal, strCategory, strInstructions, strMealThumb, idMeal } = info;
  const modalTitle = document.querySelector(".modal .modal-title");
  const modalBody = document.querySelector(".modal .modal-body");
  modalTitle.textContent = strMeal;
  modalBody.innerHTML = `
    <img class="img-fluid" src="${strMealThumb}" alt="receta ${strMeal}" />
    <h3 class="my-3">Instrucciones</h3>
    <p>${strInstructions}</p>
    <h3 class="my-3">Ingredientes:</h3>
  `;

  const listGroup = document.createElement("ul");
  listGroup.classList.add("list-group");
  for (let i = 0; i < 20; ++i) {
    if (info[`strIngredient${i}`]) {
      const ingredient = info[`strIngredient${i}`];
      const quantity = info[`strMeasure${i}`];

      const ingredientsLi = document.createElement("li");
      ingredientsLi.classList.add("list-group-item");
      ingredientsLi.textContent = `${ingredient} - ${quantity}`;

      listGroup.appendChild(ingredientsLi);
    }
  }

  modalBody.appendChild(listGroup);

  const modalFooter = document.querySelector(".modal-footer");
  clearHTML(modalFooter);

  const btnFavorite = document.createElement("button");
  btnFavorite.classList.add("btn", "btn-danger", "col");
  btnFavorite.textContent = exitsFavorite(idMeal)
    ? "Eliminar Favorito"
    : "Guardar Favorito";
  btnFavorite.onclick = function () {
    if (exitsFavorite(idMeal)) {
      deleteFavorite(idMeal);
      btnFavorite.textContent = "Guardar Favorito";
      return;
    }
    addFavorite({ id: idMeal, title: strMeal, img: strMealThumb });
    btnFavorite.textContent = "Eliminar Favorito";
  };

  const btnCloseModal = document.createElement("button");
  btnCloseModal.classList.add("btn", "btn-secondary", "col");
  btnCloseModal.textContent = "Cerrar";
  btnCloseModal.onclick = function () {
    modal.hide();
  };

  modalFooter.appendChild(btnFavorite);
  modalFooter.appendChild(btnCloseModal);

  modal.show();
}

function addFavorite(object) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];
  const recipe = JSON.stringify([...favorites, object]);
  localStorage.setItem("favorites", recipe);
}

function exitsFavorite(id) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];
  return favorites.some((favorite) => favorite.id === id);
}

function deleteFavorite(id) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];
  const newFavorites = favorites.filter((favorite) => favorite.id !== id);
  localStorage.setItem("favorites", JSON.stringify(newFavorites));
}

function clearHTML(select) {
  while (select.firstChild) {
    select.removeChild(select.firstChild);
  }
}
