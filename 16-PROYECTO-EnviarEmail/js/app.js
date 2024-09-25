document.addEventListener("DOMContentLoaded", function () {
  const email = {
    email: "",
    subject: "",
    cc: "",
    message: "",
  };

  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#message");
  const subjectInput = document.querySelector("#subject");
  const ccInput = document.querySelector("#cc");
  const form = document.querySelector("#formulario");
  const btnSubmit = document.querySelector('#formulario button[type="submit"]');
  const btnReset = document.querySelector('#formulario button[type="reset"]');
  const spinner = document.querySelector("#spinner");

  emailInput.addEventListener("input", validateInput);
  messageInput.addEventListener("input", validateInput);
  subjectInput.addEventListener("input", validateInput);
  ccInput.addEventListener("input", validateCC);
  form.addEventListener("submit", sendEmail);

  btnReset.addEventListener("click", function (e) {
    e.preventDefault();
    resetForm();
  });

  function validateInput(e) {
    if (e.target.value.trim() === "") {
      showAlert(
        `El campo ${e.target.id} es obligatorio`,
        e.target.parentElement
      );
      email[e.target.name] = "";
      checkEmail();
      return;
    }

    if (e.target.id === "email" && !validateEmail(e.target.value)) {
      showAlert("El email no es valido", e.target.parentElement);
      email[e.target.name] = "";
      checkEmail();
      return;
    }
    clearAlert(e.target.parentElement);

    // Assign values
    email[e.target.name] = e.target.value.trim().toLowerCase();
    console.log(email);
    checkEmail();
  }

  function validateCC(e) {
    if (e.target.value.trim() !== "") {
      if (e.target.id === "cc" && !validateEmail(e.target.value)) {
        showAlert("El email no es valido", e.target.parentElement);
        email[e.target.name] = "";
        checkEmail();
        return;
      }
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
    if ((email.email === '') || (email.message === '') || (email.subject === '')) {
      btnSubmit.classList.add("opacity-50");
      btnSubmit.disabled = true;
      return;
    }
    btnSubmit.classList.remove("opacity-50");
    btnSubmit.disabled = false;
  }

  function sendEmail(e) {
    e.preventDefault();
    console.log("enviando...");
    spinner.classList.add("flex");
    spinner.classList.remove("hidden");
    setTimeout(() => {
      spinner.classList.remove("flex");
      spinner.classList.add("hidden");
      resetForm();

      const sucessAlert = document.createElement("p");
      sucessAlert.classList.add(
        "bg-green-500",
        "text-white",
        "p-2",
        "text-center",
        "rounded-lg",
        "mt-10",
        "font-bold",
        "text-sm",
        "uppercase"
      );
      sucessAlert.textContent = "Message sent correctly";
      form.appendChild(sucessAlert);

      setTimeout(() => {
        sucessAlert.remove();
      }, 3000);
    }, 3000);
  }

  function resetForm() {
    email.email = "";
    email.subject = "";
    email.message = "";
    email.cc = "";

    form.reset();
    checkEmail();
  }
});
