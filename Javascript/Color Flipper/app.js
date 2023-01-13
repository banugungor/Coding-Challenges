const colors = [
  "MediumSpringGreen",
  "Red",
  "Yellow",
  "rgba(133,122,200)",
  "Purple",
  "Pink",
  "Aqua",
  "AntiqueWhite",
  "Bisque",
  "BlanchedAlmond",
  "Chocolate",
  "Crimson",
  "DarkSalmon",
  "MistyRose",
  "Moccasin",
  "Orange",
  "PaleGreen",
  "PeachPuff",
  "SlateGray",
  "",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const a = document.querySelector(".simple-link");
const navbg = document.querySelector(".nav-center");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  a.style.color = document.body.style.backgroundColor;
  const rN = getRandomNumberBg();
  navbg.style.backgroundColor = colors[rN];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
function getRandomNumberBg() {
  return Math.floor(Math.random() * colors.length);
}
