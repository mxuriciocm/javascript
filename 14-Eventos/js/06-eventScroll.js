window.addEventListener("scroll", () => {
  console.log("scrolling");

  const premiun = document.querySelector(".document");
  const ubicacion = premiun.getBoundingClientRect();

  if (ubicacion.top === 0) {
    console.log("asdf");
  }
});
