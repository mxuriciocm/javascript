document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#mensaje");
  const subjectInput = document.querySelector("#asunto");
  const form = document.querySelector("#formulario");

  emailInput.addEventListener("blur", validateInput);
  messageInput.addEventListener("blur", validateInput);
  subjectInput.addEventListener("blur", validateInput);

  function validateInput(e) {
    if (e.target.value.trim() === "") {
      showAlert(
        `El campo ${e.target.id} es obligatorio`,
        e.target.parentElement
      );
      return;
    }
    clearAlert(e.target.parentElement);
  }

  function showAlert(message, reference) {
    clearAlert(reference);

    const error = document.createElement("p");
    error.textContent = message;
    error.classList.add("bg-red-600", "p-2", "text-white", "text-center");
    reference.appendChild(error);
  }

  function clearAlert(reference) {
    const alert = reference.querySelector(".bg-red-600");
    if (alert) {
      alert.remove();
    }
  }
});
