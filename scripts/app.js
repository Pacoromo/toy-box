const menuButton = document.querySelector(".menuIcon");
const slideMenu = document.querySelector(".slideOutNav");
const closeNav = document.querySelector(".hideSideNav");

menuButton.addEventListener("click", function () {
  slideMenu.classList.add("showNav");
});

closeNav.addEventListener("click", function () {
  slideMenu.classList.remove("showNav");
});
