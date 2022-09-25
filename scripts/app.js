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
const lastNameError = document.querySelector(".lastNameGroup .icon");
const lastNameErrorMessage = document.querySelector(".lastNameGroup .errorMessage");


const emailInput = document.querySelector("#email");
const emailError = document.querySelector(".emailGroup .icon");
const emailErrorMessage = document.querySelector(".emailGroup .errorMessage");


const phoneInput = document.querySelector("#phone");
const phoneError = document.querySelector(".phoneGroup .icon");

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
  //trim whitespace to avoid blank names
  const name = input.value.trim();
  let icon,
  message;
  const namesRegex = /^[a-z ,.'-]+$/i; //https://stackoverflow.com/questions/3073850/javascript-regex-test-peoples-name

  //Check if first/last name
  if (input === firstNameInput) {
    icon = firstNameIcon;
    message = firstNameErrorMessage;
  } else if (input === lastNameInput) {
    icon = lastNameError;
    message = lastNameErrorMessage;
  } else if (input === emailInput) {
    icon = emailIcon;
    message = emailErrorMessage;
  }

  //Check input value

  if (name.length === 0) {
    message.textContent = "Please enter a valid name";
    icon.innerHTML = `<i class="fa-solid fa-circle-xmark warning"></i>`;
    return false;
  } else if (!namesRegex.test(name)) {
    message.textContent = "Please enter a valid name";
    icon.innerHTML = `<i class="fa-solid fa-circle-xmark warning"></i>`;
    return false;
  }
  
  message.textContent = "";
  icon.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
};

//Email validation

const validateEmail = (input) => {
  //trim whitespace
  const email = input.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript

  //Check input value

  if (email.length === 0) {
    emailError.textContent = "Not Valid";
    return false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Not Valid";
    return false;
  }
  emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
};

//Phone validation

const validatePhone = (input) => {
  //trim whitespace
  const phone = input.value.trim();
  const emailRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; //https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript

  //Check input value

  if (phone.length === 0) {
    phoneError.textContent = "Not Valid";
    return false;
  } else if (!emailRegex.test(phone)) {
    phoneError.textContent = "Not Valid";
    return false;
  }
  phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
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
  const errorMessages = document.querySelectorAll(".inputGroup .icon");
  errorMessages.forEach((message) => {
    message.hidden = true;
  });
});

//Show warnings back when an element form is focused
form.addEventListener("focusin", () => {
  const errorMessages = document.querySelectorAll(".inputGroup .icon");
  errorMessages.forEach((message) => {
    message.hidden = false;
  });
});

firstNameInput.addEventListener("keyup", () => {
  validateName(firstNameInput);
  //Do not show warnings if input is completely empty
  if (firstNameInput.value.length === 0) {
    firstNameIcon.textContent = "";
    firstNameErrorMessage.textContent = "";
  }
});

lastNameInput.addEventListener("keyup", () => {
  validateName(lastNameInput);
  if (lastNameInput.value.length === 0) {
    lastNameError.textContent = "";
  }
});

emailInput.addEventListener("keyup", () => {
  validateEmail(emailInput);
});

phoneInput.addEventListener("keyup", () => {
  validatePhone(phoneInput);
});

phoneInput.addEventListener("focusin", () => {
  phoneInput.placeholder = "Enter your 10 digit phone number";
});

phoneInput.addEventListener("focusout", () => {
  phoneInput.placeholder = "Phone";
});
