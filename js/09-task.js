function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector(".change-color");
const spanTextEl = document.querySelector(".color");

buttonEl.addEventListener("click", onChangeColor);

function onChangeColor(event) {
  document.body.style.background = getRandomHexColor();
  spanTextEl.textContent = getRandomHexColor();
}
