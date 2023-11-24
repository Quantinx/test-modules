"use strict";
let hamburgerToggleEl = document.querySelector("#hamburgerToggle");
let hamburgerMenuEl = document.querySelector("#hamburgerMenu");
let darkToggleEl = document.querySelector("#darkToggle");
let rootEl = document.querySelector(":root");
let hamburgerToggle = false;
let imgOneEl = document.querySelector("#imgOne");
let darkToggle = JSON.parse(localStorage.getItem("darkmode")) || false;
console.log(hamburgerMenuEl);
console.log(hamburgerToggleEl);
darkMode();
hamburgerToggleEl.addEventListener("click", function (e) {
  if (hamburgerToggle === false) {
    hamburgerMenuEl.style.visibility = "visible";
    hamburgerMenuEl.style.width = "15rem";
    hamburgerToggle = true;
    hamburgerToggleEl.innerText = "X";
  } else {
    hamburgerMenuEl.style.visibility = "hidden";
    hamburgerMenuEl.style.width = "0rem";

    hamburgerToggleEl.innerText = "|||";

    hamburgerToggle = false;
  }
});

function darkMode() {
  if (darkToggle === true) {
    rootEl.style.setProperty("--default-menu-color", "var( --dark-menu-color)");
    rootEl.style.setProperty("--default-txt-color", "var(--dark-txt-color)");
    rootEl.style.setProperty("--default-bg-color", "var( --dark-bg-color)");
    darkToggleEl.innerText = "Light Mode";
  } else {
    rootEl.style.setProperty(
      "--default-menu-color",
      "var( --light-menu-color)"
    );
    rootEl.style.setProperty("--default-txt-color", "var(--light-txt-color)");
    rootEl.style.setProperty("--default-bg-color", "var( --light-bg-color)");
    darkToggleEl.innerText = "Dark Mode";
  }
}

darkToggleEl.addEventListener("click", function (e) {
  if (darkToggle === false) {
    darkToggle = true;
    localStorage.setItem("darkmode", JSON.stringify(darkToggle));
  } else {
    darkToggle = false;
    localStorage.setItem("darkmode", JSON.stringify(darkToggle));
  }
  darkMode();
});

imgOneEl.addEventListener("click", function (e) {
  imgOneEl.classList.toggle("imgzoomed");
});
