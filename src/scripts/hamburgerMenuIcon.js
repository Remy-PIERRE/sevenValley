const hamburgerMenuIcon = document.querySelector("#hamburgerMenuIcon");
const responsiveNavBar = document.querySelector("#responsiveNavBar");

hamburgerMenuIcon.addEventListener("click", () => {
  hamburgerMenuIcon.classList.toggle("open");
  responsiveNavBar.classList.toggle("hidden");
  responsiveNavBar.classList.toggle("open");
});
