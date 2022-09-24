//**Elements selectors **//

//Slide Menu
const menuButton = document.querySelector(".menuIcon");
const slideMenu = document.querySelector(".slideOutNav");
const closeNav = document.querySelector(".hideSideNav");

//form elements 
const form = document.querySelector('form')
const firstNameInput = document.getElementById('firstName');
const LastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const contactReason = document.getElementById('reason');
const message = document.getElementById('message');
const agreedTerms = document.getElementById('terms');





//** Event Listeners **//

//Slide Menu
menuButton.addEventListener("click", function () {
  slideMenu.classList.add("showNav");
});

closeNav.addEventListener("click", function () {
  slideMenu.classList.remove("showNav");
});

//Form 




