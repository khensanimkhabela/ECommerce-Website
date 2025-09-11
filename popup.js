const cartButton = document.getElementById("cartButton");
const popup = document.getElementById("popupMessage");

cartButton.addEventListener("click", () => {
  popup.classList.remove("hidden");

  // Hide after 2 seconds
  setTimeout(() => {
    popup.classList.add("hidden");
  }, 2000);
});