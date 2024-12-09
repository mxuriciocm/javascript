const url = "https://picsum.photos/list";

document.addEventListener("DOMContentLoaded", getData);

function getData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

async function getData1() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
