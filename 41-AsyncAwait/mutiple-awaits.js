function dowloadNewClients() {
  return new Promise((resolve) => {
    console.log("Download clients...");
    setTimeout(() => {
      resolve("The clients were downloaded");
    }, 5000);
  });
}

function downloadNewOrders() {
  return new Promise((resolve) => {
    console.log("Download orders...");
    setTimeout(() => {
      resolve("The orders were downloaded");
    }, 3000);
  });
}

const app = async () => {
  try {
    // Sirve para hacer multiples peticiones a la vez y ganar performance
    const response = await Promise.all([
      dowloadNewClients(),
      downloadNewOrders(),
    ]);
    console.log(response);

    // Si una dependiera de la otra, existe otro metodo, que seria un poco mas lento pero funcionaria
    // const clients = await dowloadNewClients();
    // console.log(clients);

    // const orders = await downloadNewOrders();
    // console.log(orders);
  } catch (error) {
    console.log(error);
  }
};

app();
