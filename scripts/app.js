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

const phoneInput = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");

const contactReason = document.getElementById("reason");
const reasonPlaceholder = document.getElementById("selectPlaceholder");

const message = document.getElementById("message");

const agreedTerms = document.getElementById("terms");
const termsError = document.getElementById("termsError");

//**********************************************************/
//********************** Functions ************************//
//**********************************************************/

//Name validation

const validateName = (input) => {
  //trim whitespace
  const name = input.value.trim();
  let errorMessage;
  const namesRegex = /^[a-zA-Z ]+$/; //https://stackoverflow.com/questions/3073850/javascript-regex-test-peoples-name

  //Check if first/last name
  if (input === firstNameInput) {
    errorMessage = document.getElementById("firstNameError");
  } else {
    errorMessage = document.getElementById("lastNameError");
  }

  //Check input value

  if (name.length === 0) {
    errorMessage.textContent = "Not Valid";
    return false;
  } else if (!namesRegex.test(name)) {
    errorMessage.textContent = "Not Valid";
    return false;
  }
  errorMessage.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
};

//Email validation

const validateEmail = (input) => {
  //trim whitespace
  const email = input.value.trim();
  const errorMessage = document.getElementById("emailError");
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript

  //Check input value

  if (email.length === 0) {
    errorMessage.textContent = "Not Valid";
    return false;
  } else if (!emailRegex.test(email)) {
    errorMessage.textContent = "Not Valid";
    return false;
  }
  errorMessage.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
};

//**********************************************************/
//***************** Event Listeners ***********************//
//**********************************************************/

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

//If form loses focus do not show any warnings
form.addEventListener("focusout", () => {
  const errorMessages = document.querySelectorAll("[id$=Error]");
  errorMessages.forEach((message) => {
    message.hidden = true;
  });
});

//Show warnings back when an element form is focused
form.addEventListener("focusin", () => {
  const errorMessages = document.querySelectorAll("[id$=Error]");
  errorMessages.forEach((message) => {
    message.hidden = false;
  });
});

firstNameInput.addEventListener("keyup", () => {
  validateName(firstNameInput);
});

lastNameInput.addEventListener("keyup", () => {
  validateName(lastNameInput);
});

emailInput.addEventListener("keyup", () => {
  validateEmail(emailInput);
});
