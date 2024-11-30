const applyDiscount = new Promise((resolve, reject) => {
  const discount = true;

  if (discount) {
    resolve("Discount applied!");
  } else {
    reject("Discount failed!");
  }
});

applyDiscount
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
