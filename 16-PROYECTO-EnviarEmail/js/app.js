document.addEventListener("DOMContentLoaded", function () {
  const email = {
    email: "",
    subject: "",
    message: "",
  };

  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#message");
  const subjectInput = document.querySelector("#subject");
  const submitBtn = document.querySelector('#formulario button[type="submit"]');

  emailInput.addEventListener("blur", validateInput);
  messageInput.addEventListener("blur", validateInput);
  subjectInput.addEventListener("blur", validateInput);

  function validateInput(e) {
    if (e.target.value.trim() === "") {
      showAlert(
        `El campo ${e.target.id} es obligatorio`,
        e.target.parentElement
      );
      checkEmail()
      return;
    }

    if (e.target.id === "email" && !validateEmail(e.target.value)) {
      showAlert("El email no es valido", e.target.parentElement);
      checkEmail()
      return;
    }
    clearAlert(e.target.parentElement);

    // Assign values
    email[e.target.name] = e.target.value.trim().toLowerCase();
    console.log(email);
    checkEmail();
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

  function validateEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const result = regex.test(email);
    return result;
  }

  function checkEmail() {
    if (Object.values(email).includes("")) {
  
    } else {
      submitBtn.classList.remove("opacity-50");
      submitBtn.disabled = false;
    }
  }
});
