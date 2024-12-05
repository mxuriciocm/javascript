const form = document.querySelector("#formulario");
const result = document.querySelector("#resultado");
const cryptoList = document.querySelector("#criptomonedas");
const coinsList = document.querySelector("#moneda");

window.addEventListener("load", () => {
  fetchCryptoInfo();
  form.addEventListener("submit", validateForm);
});

function validateForm(e) {
  e.preventDefault();
  let coinValue = coinsList.value;
  let cryptoValue = cryptoList.value;
  console.log(cryptoValue);
  console.log(coinValue);
  if (coinValue === "" && cryptoValue === "") {
    showAlert("Seleccione la moneda y la criptomoneda");
    return;
  }
  fetchByCryptoAndCoin(coinValue, cryptoValue);
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
    option.textContent = `${FullName}`;
    cryptoList.appendChild(option);
  });
}

function fetchByCryptoAndCoin(coinValue, cryptoValue) {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoValue}&tsyms=${coinValue}`;
  displaySpinner();
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayInfo(data.DISPLAY[cryptoValue][coinValue]))
    .catch((e) => console.log(e));
}

function displayInfo(info) {
  clearHTML(result);
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = info;

  const price = document.createElement("p");
  price.classList.add("price");
  price.innerHTML = `El precio es: <span>${PRICE}</span>`;

  const highestPrice = document.createElement("p");
  highestPrice.innerHTML = `<p>Precio más alto del día <span>${HIGHDAY}</span></p>`;

  const lowestPrice = document.createElement("p");
  lowestPrice.innerHTML = `<p>Precio más alto del día <span>${LOWDAY}</span></p>`;

  result.appendChild(price);
  result.appendChild(highestPrice);
  result.appendChild(lowestPrice);
}

function clearHTML(parameter) {
  while (parameter.firstChild) {
    parameter.removeChild(parameter.firstChild);
  }
}

function displaySpinner() {
  clearHTML(result);
  const spinner = document.createElement("div");
  spinner.classList.add("spinner");
  spinner.innerHTML = `
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    `;
  result.appendChild(spinner);
}
