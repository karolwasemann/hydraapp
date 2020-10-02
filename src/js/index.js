import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

const numberGlass = document.querySelector(".glass__number--js");
const addGlass = document.querySelector(".buttons__add--js");
const remove = document.querySelector(".buttons__remove--js");
const key = new Date().toLocaleString().slice(0, 10);
const level = document.querySelector(".level__circle--js");

let qNumber = 0;

// Poziom nawodnienia

// Sprawdzanie

const localStorageValue = localStorage.getItem(key);

if (localStorageValue) {
  qNumber = localStorageValue;
} else {
  localStorage.setItem(key, 0);
}
numberGlass.innerHTML = qNumber;

//Dodawanie i usuwanie szklanek

addGlass.addEventListener("click", () => {
  qNumber++;
  numberGlass.innerHTML = qNumber;
  localStorage.setItem(key, qNumber);
  checkLevel();
});

remove.addEventListener("click", () => {
  if (qNumber > 0) {
    qNumber--;
  }
  numberGlass.innerHTML = qNumber;
  localStorage.setItem(key, qNumber);
  checkLevel();
});

const checkLevel = () => {
  if (qNumber <= 3) {
    level.style.backgroundColor = "red";
  } else if (qNumber <= 5) {
    level.style.backgroundColor = "orange";
  } else {
    level.style.backgroundColor = "green";
  }
};
