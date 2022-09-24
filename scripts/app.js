//**Elements selectors **//

//Slide Menu
const menuBtn = document.querySelector(".menuIcon");
const slideMenu = document.querySelector(".slideOutNav");
const closeNavBtn = document.querySelector(".hideSideNav");

//form elements
const form = document.querySelector("form");

const firstNameInput = document.getElementById("firstName");

const lastNameInput = document.getElementById("lastName");

const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

const phoneInput = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");

const contactReason = document.getElementById("reason");
const reasonPlaceholder = document.getElementById("selectPlaceholder");

const message = document.getElementById("message");

const agreedTerms = document.getElementById("terms");
const termsError = document.getElementById("termsError");

//Functions

const validateName = (input) => {
  //trim whitespace
  const name = input.value.trim();
  let inputError;
  //Check if first or last name
  if (input === firstNameInput) {
    inputError = document.getElementById("firstNameError");
  } else {
    inputError = document.getElementById("lastNameError");
  }

  //Check input value

  if (name.length === 0) {
    inputError.textContent = "Not Valid";
    return false;
  }
  inputError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
};

//** Event Listeners **//

//Slide Menu
menuBtn.addEventListener("click", () => {
  slideMenu.classList.add("showNav");
});

closeNavBtn.addEventListener("click", () => {
  slideMenu.classList.remove("showNav");
});

//Form elements

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

//If form loses focus do not show any warnings (Bubbling)

form.addEventListener("focusout", () => {
  const errorMessages = document.querySelectorAll("[id$=Error]");
  console.log(errorMessages);
  errorMessages.forEach((message) => {
    message.style.display = "none";
  });
});

//Show warnings back when an element form is focused
form.addEventListener("focusin", () => {
  const errorMessages = document.querySelectorAll("[id$=Error]");
  errorMessages.forEach((message) => {
    message.style.display = "initial";
  });
  const selectMessage = document.getElementById("selectPlaceholder");
  selectMessage.textContent = "test";
});

firstNameInput.addEventListener("keyup", () => {
  validateName(firstNameInput);
});
lastNameInput.addEventListener("keyup", () => {
  validateName(lastNameInput);
});
