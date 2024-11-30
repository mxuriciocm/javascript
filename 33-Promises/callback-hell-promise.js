const countries = [];

const newCountry1 = (country) => {
  new Promise((resolve) => {
    setTimeout(() => {
      countries.push(country);
      resolve(`Pais agregado ${country}`);
    }, 3000);
  });
};

newCountry1("Germany")
  .then((result) => {
    console.log(result);
    console.log(countries);
    return newCountry1("France");
  })
  .then((result) => {
    console.log(result);
    console.log(countries);
    return newCountry1("England");
  })
  .then((result) => {
    console.log(result);
    console.log(countries);
  });
