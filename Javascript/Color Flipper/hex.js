const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const a = document.querySelector(".hex-link");
const navbg = document.querySelector(".nav-center");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  a.style.color = document.body.style.backgroundColor;

  let backHex = "#";
  for (let i = 0; i < 6; i++) {
    backHex += hex[getRandomNumberBg()];
  }
  navbg.style.backgroundColor = backHex;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
function getRandomNumberBg() {
  return Math.floor(Math.random() * hex.length);
}
