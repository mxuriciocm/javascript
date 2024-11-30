const countries = [];

function newCountry(country, callback) {
  countries.push(country);
  console.log("Country added: ${country}");
  callback();
}

function showCountries() {
  console.log(countries);
}

function startCallbackHell() {
  setTimeout(() => {
    newCountry("Germany", showCountries);
    setTimeout(() => {
      newCountry("France", showCountries);
      setTimeout(() => {
        newCountry("Italy", showCountries);
        setTimeout(() => {
          newCountry("Spain", showCountries);
          setTimeout(() => {
            newCountry("Portugal", showCountries);
          }, 3000);
        }, 3000);
      }, 3000);
    }, 3000);
  }, 3000);
}

showCountries();
