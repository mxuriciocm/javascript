document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    document.title = "No te vayas";
    console.log("asd");
  } else {
    document.title = "Document";
  }
});
    