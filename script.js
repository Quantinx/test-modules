"use strict";
let hamburgerToggleEl = document.querySelector("#hamburgerToggle");
let hamburgerMenuEl = document.querySelector("#hamburgerMenu");
let darkToggleEl = document.querySelector("#darkToggle");
let rootEl = document.querySelector(":root");
let hamburgerToggle = false;
let darkToggle = JSON.parse(localStorage.getItem("darkmode")) || false;
console.log(hamburgerMenuEl);
console.log(hamburgerToggleEl);
darkMode();
hamburgerToggleEl.addEventListener("click", function (e) {
  if (hamburgerToggle === false) {
    hamburgerMenuEl.style.visibility = "visible";
    hamburgerToggle = true;
    hamburgerToggleEl.innerText = "|||";
  } else {
    hamburgerMenuEl.style.visibility = "hidden";
    hamburgerToggleEl.innerText = " X ";

    hamburgerToggle = false;
  }
});

function darkMode() {
  if (darkToggle === true) {
    rootEl.style.setProperty("--default-menu-color", "grey");
    rootEl.style.setProperty("--default-txt-color", "white");
    rootEl.style.setProperty("--default-bg-color", "black");
    darkToggleEl.innerText = "Light Mode";
  } else {
    rootEl.style.setProperty("--default-menu-color", "blue");
    rootEl.style.setProperty("--default-txt-color", "black");
    rootEl.style.setProperty("--default-bg-color", "white");
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
