const enableBtn = document.querySelector("#enable-notification-btn");
const viewBtn = document.querySelector("#view-notificacion-btn");

enableBtn.addEventListener("click", () => {
  Notification.requestPermission().then((result) => {
    if (result === "granted") {
      console.log(result);
    }
  });
});

viewBtn.addEventListener("click", () => {
  if (Notification.requestPermission === "granted") {
    new Notification("Hola");
  }
});
