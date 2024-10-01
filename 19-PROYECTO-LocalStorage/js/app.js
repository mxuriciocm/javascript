const form = document.querySelector("#formulario");
const listTweets = document.querySelector("#lista-tweets");
let tweets = [];

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", addTweet);
  tweets = JSON.parse(localStorage.getItem("tweets")) || [];
  addTweetToHTML();
});

function addTweet(e) {
  e.preventDefault();
  const tweet = document.querySelector("#tweet").value;
  if (tweet === "") {
    showError("Un mensaje no puede ir vacio");
    return;
  }

  const tweetObj = {
    id: Date.now(),
    tweet,
  };

  tweets = [...tweets, tweetObj];
  console.log(tweets);
  addTweetToHTML();
  form.reset();
}

function showError(error) {
  const message = document.createElement("p");
  message.textContent = error;
  message.classList.add("error");

  const content = document.querySelector("#contenido");
  content.appendChild(message);
  setTimeout(() => {
    message.remove();
  }, 3000);
}

function addTweetToHTML() {
  clearHTML();
  if (tweets.length > 0) {
    tweets.forEach((tweet) => {
      const btnDelete = document.createElement("a");
      const li = document.createElement("li");
      btnDelete.classList.add("borrar-tweet");
      btnDelete.textContent = "X";
      btnDelete.onclick = () => {
        deleteTweet(tweet.id);
      };
      li.textContent = tweet.tweet;
      listTweets.appendChild(li);
      li.appendChild(btnDelete);
    });
  }
  addTweetToStorage();
}

function clearHTML() {
  while (listTweets.firstChild) {
    listTweets.removeChild(listTweets.firstChild);
  }
}

function addTweetToStorage() {
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

function deleteTweet(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);

  addTweetToHTML();
}
