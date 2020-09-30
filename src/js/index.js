import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

const numberGlass = document.querySelector(".glass__number--js");
const addGlass = document.querySelector(".buttons__add--js");
const remove = document.querySelector(".buttons__remove--js");

const key = new Date().toISOString().slice(0, 10);

let number = 0;

addGlass.addEventListener("click", () => {
  console.log("asd");
  number++;
  numberGlass.innerHTML = number;
});

remove.addEventListener("click", () => {
  if (number > 0) {
    number--;
    numberGlass.innerHTML = number;
  } else {
    number = 0;
  }
});
