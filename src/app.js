/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#generate").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuse();
  });
};

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
let i = 0;

function excuse() {
  let randomIndex1 = Math.floor(Math.random(i) * who.length);

  let randomIndex2 = Math.floor(Math.random(i) * action.length);

  let randomIndex3 = Math.floor(Math.random(i) * what.length);

  let randomIndex4 = Math.floor(Math.random(i) * when.length);

  let randomExcuse =
    who[randomIndex1] +
    " " +
    action[randomIndex2] +
    " " +
    what[randomIndex3] +
    " " +
    when[randomIndex4];

  return randomExcuse;
}
