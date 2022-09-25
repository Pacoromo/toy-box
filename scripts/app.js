//**Elements selectors **//

//Slide Menu
const menuBtn = document.querySelector(".menuIcon");
const slideMenu = document.querySelector(".slideOutNav");
const closeNavBtn = document.querySelector(".hideSideNav");

//form elements
const form = document.querySelector("form");
const firstNameInput = document.querySelector("#firstName");
const firstNameIcon = document.querySelector(".firstNameGroup .icon");
const firstNameErrorMessage = document.querySelector(".firstNameGroup .errorMessage");

const lastNameInput = document.querySelector("#lastName");
const lastNameIcon = document.querySelector(".lastNameGroup .icon");
const lastNameErrorMessage = document.querySelector(".lastNameGroup .errorMessage");

const emailInput = document.querySelector("#email");
const emailIcon = document.querySelector(".emailGroup .icon");
const emailErrorMessage = document.querySelector(".emailGroup .errorMessage");

const phoneInput = document.querySelector("#phone");
const phoneIcon = document.querySelector(".phoneGroup .icon");
const phoneErrorMessage = document.querySelector(".phoneGroup .errorMessage");


const contactReason = document.getElementById("reason");
const reasonPlaceholder = document.getElementById("selectPlaceholder");

const message = document.getElementById("message");

const agreedTerms = document.getElementById("terms");
const termsError = document.getElementById("termsError");

//**********************************************************/
//********************** Functions ************************//
//**********************************************************/

//Name validation

const checkInput = (input) => {
  //trim whitespace to avoid blank inputs
  const inputValue = input.value.trim();
  let iconContainer, messageContainer, regex, message;
  const namesRegex = /^[a-z ,.'-]+$/i; //https://stackoverflow.com/questions/3073850/javascript-regex-test-peoples-name
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; //https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript

  //Check if first/last name
  if (input === firstNameInput) {
    iconContainer = firstNameIcon;
    messageContainer = firstNameErrorMessage;
    regex = namesRegex;
    message = "Please enter a valid first name";
  } else if (input === lastNameInput) {
    iconContainer = lastNameIcon;
    messageContainer = lastNameErrorMessage;
    regex = namesRegex;
    message = "Please enter a valid last name";
  } else if (input === emailInput) {
    iconContainer = emailIcon;
    messageContainer = emailErrorMessage;
    regex = emailRegex;
    message = "Please enter a valid email";
  } else if (input === phoneInput) {
    iconContainer = phoneIcon;
    messageContainer = phoneErrorMessage;
    regex = phoneRegex;
    message = "Please enter a valid phone number";
  }

  //Check input value

  if (inputValue.length === 0) {
    messageContainer.textContent = message;
    iconContainer.innerHTML = `<i class="fa-solid fa-circle-xmark warning"></i>`;
    return false;
  } else if (!regex.test(inputValue)) {
    messageContainer.textContent = message;
    iconContainer.innerHTML = `<i class="fa-solid fa-circle-xmark warning"></i>`;
    return false;
  }

  messageContainer.textContent = "";
  iconContainer.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
};

const clearInput = (input, inputIcon, inputMessage) => {
  if (input.value.length === 0) {
    inputIcon.textContent = "";
    inputMessage.textContent = "";
  }
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
  const errorIcons = document.querySelectorAll(".inputGroup .icon");
  const errorMessages = document.querySelectorAll(".inputGroup .errorMessage");
  errorIcons.forEach((icon) => {
    icon.hidden = true;
  });
  errorMessages.forEach((message) => {
    message.hidden = true;
  });
});

//Show warnings back when a form element is focused
form.addEventListener("focusin", () => {
  const errorIcons = document.querySelectorAll(".inputGroup .icon");
  const errorMessages = document.querySelectorAll(".inputGroup .errorMessage");
  errorIcons.forEach((icon) => {
    icon.hidden = false;
  });
  errorMessages.forEach((message) => {
    message.hidden = false;
  });
});

firstNameInput.addEventListener("keyup", () => {
  checkInput(firstNameInput);
  clearInput(firstNameInput, firstNameIcon, firstNameErrorMessage);//Do not show warnings if input is completely empty
});

lastNameInput.addEventListener("keyup", () => {
  checkInput(lastNameInput);
  clearInput(lastNameInput, lastNameIcon, lastNameErrorMessage);
});

emailInput.addEventListener("keyup", () => {
  checkInput(emailInput);
  clearInput(emailInput, emailIcon, emailErrorMessage);
});

phoneInput.addEventListener("keyup", () => {
  checkInput(phoneInput);
  clearInput(phoneInput, phoneIcon, phoneErrorMessage);
});
