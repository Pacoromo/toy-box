//**Elements selectors **//

//Slide Menu
const menuButton = document.querySelector(".menuIcon");
const slideMenu = document.querySelector(".slideOutNav");
const closeNav = document.querySelector(".hideSideNav");

// Event Listeners
//Slide Menu
menuButton.addEventListener("click", function () {
  slideMenu.classList.add("showNav");
});

closeNav.addEventListener("click", function () {
  slideMenu.classList.remove("showNav");
});

