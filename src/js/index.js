import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

const numberGlass = document.querySelector(".glass__number--js");
const addGlass = document.querySelector(".buttons__add--js");
const remove = document.querySelector(".buttons__remove--js");
const key = new Date().toLocaleString().slice(0, 10);

let number = 0;

// Sprawdzanie

const localStorageValue = localStorage.getItem(key);

if (localStorageValue) {
  number = localStorageValue;
} else {
  localStorage.setItem(key, 0);
}
numberGlass.innerHTML = number;

//Dodawanie i usuwanie szklanek

addGlass.addEventListener("click", () => {
  number++;
  numberGlass.innerHTML = number;
  localStorage.setItem(key, number);
});

remove.addEventListener("click", () => {
  if (number > 0) {
    number--;
  }
  numberGlass.innerHTML = number;
  localStorage.setItem(key, number);
});
