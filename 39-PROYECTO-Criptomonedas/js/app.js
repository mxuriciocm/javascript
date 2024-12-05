const form = document.querySelector("#formulario");
const result = document.querySelector("#resultado");
const cryptoList = document.querySelector("#criptomonedas");
const coins = document.querySelector("#moneda");

window.addEventListener("load", () => {
    fetchCryptoInfo();
    form.addEventListener("submit", validateForm);
});

function validateForm(e) {
  e.preventDefault();
  let coinValue = coins.value;
  let cryptoValue = cryptoList.value;
  console.log(cryptoValue);
  if (coinValue === "" && cryptoValue === "") {
    showAlert("Seleccione la moneda y la criptomoneda");
    return;
  }
}

function showAlert(message) {
  const exitsAlert = document.querySelector(".error");
  const alert = document.createElement("div");
  if (exitsAlert) {
    return;
  }
  alert.classList.add("error");
  alert.textContent = message;
  form.appendChild(alert);
  setTimeout(() => {
    alert.remove();
  }, 3000);
}

function fetchCryptoInfo() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.Data);
      showCryptoInfo(data.Data);
    })
    .catch((e) => console.log(e));
}

function showCryptoInfo(arrayCrypto) {
  arrayCrypto.forEach((crypto) => {
    const {
      CoinInfo: { Name, FullName },
    } = crypto;
    const option = document.createElement("option");
    option.value = Name;
    option.textContent = `${FullName} - ${Name}`;
    cryptoList.appendChild(option);
  });
}
