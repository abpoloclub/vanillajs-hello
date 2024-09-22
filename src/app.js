/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const excuse = document.querySelector("#excuse");

  if (excuse) {
    let who = ["The dog", "My grandma", "The mailman", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "my phone", "the car"];
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];

    const newExcuseContent = [who, action, what, when];

    let newExcuse = "";

    newExcuseContent.forEach(array => {
      const randomPosition = Math.floor(Math.random() * (array.length - 0));

      newExcuse += array[randomPosition] + " ";
    });

    excuse.textContent = newExcuse;
  }
};
