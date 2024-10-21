import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const excuseElement = document.querySelector("#excuse");

  if (excuseElement) {
    const who = ["The dog", "My grandma", "The mailman", "My bird"];
    const action = ["ate", "peed", "crushed", "broke"];
    const what = ["my homework", "my phone", "the car"];
    const when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];

    const newExcuse = generateExcuse([who, action, what, when]);

    displayExcuse(excuseElement, newExcuse);
  }
};

function generateExcuse(parts) {
  return parts
    .map(array => {
      return getRandomElement(array);
    })
    .join(" ");
}

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function displayExcuse(element, excuse) {
  element.textContent = excuse;
}
