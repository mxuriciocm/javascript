const cart = document.querySelector("#carrito");
const listCourses = document.querySelector("#lista-cursos");
const containerCart = document.querySelector("#lista-carrito tbody");
const emptyCartBtn = document.querySelector("#vaciar-carrito");
let cartItem = [];

loadEventListeners();
function loadEventListeners() {
  listCourses.addEventListener("click", addCourse);
  cart.addEventListener("click", removeCourse);
  document.addEventListener("DOMContentLoaded", () => {
    cartItem = JSON.parse(localStorage.getItem("cartItem")) || [];
    showCart();
  });
  emptyCartBtn.addEventListener("click", () => {
    cartItem = [];
    showCart();
  });
}

function addCourse(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const selectCourse = e.target.parentElement.parentElement;
    readDataCourse(selectCourse);
  }
}

function readDataCourse(course) {
  const infoCourse = {
    img: course.querySelector("img").src,
    title: course.querySelector("h4").textContent,
    price: course.querySelector("span").textContent,
    id: course.querySelector("a").getAttribute("data-id"),
    quantity: 1,
  };

  const existCart = cartItem.some((course) => {
    return course.id === infoCourse.id;
  });

  if (existCart) {
    const courses = cartItem.map((course) => {
      if (course.id === infoCourse.id) {
        course.quantity++;
        return course;
      } else {
        return course;
      }
    });
    cartItem = [...courses];
  } else {
    cartItem = [...cartItem, infoCourse];
  }

  showCart();
}

function showCart() {
  clearCart();
  cartItem.forEach((course) => {
    const { img, title, price, id, quantity } = course;
    const row = document.createElement("tr");
    row.innerHTML = `<td><img src=${img} width=100></td><td>${title}</td><td>${price}</td><td>${quantity}</td><td><a class="borrar-curso" data-id=${id}>X</a></td>`;
    containerCart.appendChild(row);
  });

  addItemsToStorage();
}

function clearCart() {
  while (containerCart.firstChild) {
    containerCart.removeChild(containerCart.firstChild);
  }
}

function removeCourse(e) {
  if (e.target.classList.contains("borrar-curso")) {
    const selectCourse = e.target.getAttribute("data-id");
    cartItem = cartItem.filter((course) => course.id !== selectCourse);
    showCart();
  }
}

function addItemsToStorage() {
  localStorage.setItem("cartItem", JSON.stringify(cartItem));
}
