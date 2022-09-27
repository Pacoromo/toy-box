//**Elements selectors **//

//Slide Menu
const menuBtn = document.querySelector(".menuIcon");
const slideMenu = document.querySelector(".slideOutNav");
const closeNavBtn = document.querySelector(".hideSideNav");

//form elements
const form = document.querySelector("form");

const firstNameInput = document.querySelector("#firstName");
const firstNameIcon = document.querySelector(".firstNameGroup .icon");
const firstNameErrorMessage = document.querySelector(
  ".firstNameGroup .errorMessage"
);

const lastNameInput = document.querySelector("#lastName");
const lastNameIcon = document.querySelector(".lastNameGroup .icon");
const lastNameErrorMessage = document.querySelector(
  ".lastNameGroup .errorMessage"
);

const emailInput = document.querySelector("#email");
const emailIcon = document.querySelector(".emailGroup .icon");
const emailErrorMessage = document.querySelector(".emailGroup .errorMessage");

const phoneInput = document.querySelector("#phone");
const phoneIcon = document.querySelector(".phoneGroup .icon");
const phoneErrorMessage = document.querySelector(".phoneGroup .errorMessage");

const reasonSelectMenu = document.getElementById("reason");
const reasonSelectMenuErrorMessage = document.querySelector(
  ".selectGroup .errorMessage"
);

const messageInput = document.getElementById("message");
const messageInputErrorMessage = document.querySelector(
  ".messageGroup .errorMessage"
);

const termsCheckbox = document.getElementById("terms");
const termsErrorMessage = document.querySelector(".termsGroup .errorMessage");

// Regular expressions

const namesRegex = /^[a-z ,.'-]+$/i; //https://stackoverflow.com/questions/3073850/javascript-regex-test-peoples-name
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
const phoneRegex =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; //https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript

//**********************************************************/
//********************** Functions ************************//
//**********************************************************/

//input validation

const checkInput = (input) => {
  //trim whitespace to avoid validating blank inputs
  const inputValue = input.value.trim();
  let iconContainer, messageContainer, regex, message;

  //Check kind of input
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
  } else if (input === reasonSelectMenu) {
    if (reasonSelectMenu.value === "initial") {
      reasonSelectMenuErrorMessage.textContent =
        "Please tell us the reason of your message";
      return false;
    }
    return true;
  } else if (input === messageInput) {
    if (inputValue.length === 0) {
      messageInputErrorMessage.textContent = "Don't forget your message!";
      messageInput.value = ""; //Reset text area if user types only blank spaces
      return false;
    }
    return true;
  } else if (input === termsCheckbox) {
    if (!termsCheckbox.checked) {
      termsErrorMessage.textContent = "Please agree to our terms & conditions";
      return false;
    }
    return true;
  }

  //Then, validate input value

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

//Clear warnings if input is emptied by user

const clearInputWarnings = (input, inputIcon, inputMessage) => {
  if (input.value.length === 0) {
    inputIcon.textContent = "";
    inputMessage.textContent = "";
  }
};

//Show modal screen function

const showModalScreen = () => {
  const modalScreen = document.querySelector(".modalScreen");
  const popUpMessageContainer = document.querySelector(
    ".popUpMessageContainer"
  );
  const modalBtn = document.querySelector(".modalScreen button");
  const navBarHeight = document.querySelector(".navBar").clientHeight;
  const allWarnings = document.querySelectorAll("form .errorMessage");
  let firstWarning = "";

  //Get the first warning being shown on screen
  for (let i = 0; i < allWarnings.length; i++) {
    if (allWarnings[i].textContent !== "") {
      firstWarning = allWarnings[i];
      break;
    }
  }

  //Generate HTML message
  popUpMessageContainer.innerHTML = `<p>${firstWarning.textContent}</p>`;

  //Once it's ready show modal screen
  modalScreen.classList.add("activeModal");

  modalBtn.addEventListener(
    "click",
    () => {
      firstWarning.scrollIntoView(); //Scroll to the first warning (useful on mobile)
      window.scrollBy({
        top: -navBarHeight, //Navbar scroll offset (Navbar size changes on mobile)
        left: "0",
        behavior: "smooth",
      });
      modalScreen.classList.remove("activeModal");
    },
    { once: true } //Listen only when modal is shown
  );
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
  if (
    checkInput(firstNameInput) &&
    checkInput(lastNameInput) &&
    checkInput(emailInput) &&
    checkInput(phoneInput) &&
    checkInput(reasonSelectMenu) &&
    checkInput(messageInput) &&
    checkInput(termsCheckbox)
  ) {
    e.target.submit();
  } else {
    showModalScreen();
  }
});

firstNameInput.addEventListener("input", (e) => {
  checkInput(e.target);
  clearInputWarnings(e.target, firstNameIcon, firstNameErrorMessage); //Clear warnings if input is emptied by user
});

lastNameInput.addEventListener("input", (e) => {
  checkInput(e.target);
  clearInputWarnings(e.target, lastNameIcon, lastNameErrorMessage);
});

emailInput.addEventListener("input", (e) => {
  checkInput(e.target);
  clearInputWarnings(e.target, emailIcon, emailErrorMessage);
});

phoneInput.addEventListener("input", (e) => {
  checkInput(e.target);
  clearInputWarnings(e.target, phoneIcon, phoneErrorMessage);
});

reasonSelectMenu.addEventListener("input", (e) => {
  //Clear messages when a change has occurred
  reasonSelectMenuErrorMessage.textContent = "";
});

messageInput.addEventListener("input", (e) => {
  messageInputErrorMessage.textContent = "";
});

termsCheckbox.addEventListener("input", () => {
  termsErrorMessage.textContent = "";
});

//Clear form once submitted (formspree recommended)
window.onbeforeunload = () => {
  form.reset();
};
