const fullScreenBtn = document.querySelector("#open-fullscreen-btn");
const exitFullScreenBtn = document.querySelector("#exit-fullscreen-btn");

fullScreenBtn.addEventListener("click", () => {
  document.documentElement.requestFullscreen();
});

exitFullScreenBtn.addEventListener("click", () => {
  document.exitFullscreen();
});
