const countries = ["Argentina", "Brasil", "Chile", "Uruguay"];

function newCountry(country, callback){
    setTimeout(() => {
        countries.push(country);
        callback();
    }, 2000);
}

function showCountries() {
  setTimeout(() => {
    countries.forEach((country) => {
      console.log(country);
    });
  }, 1000);
}

showCountries();