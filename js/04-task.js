const targetBtnDecrement = document.querySelector(
  'button[data-action="decrement"]'
);

const targetBtnIncrement = document.querySelector(
  'button[data-action="increment"]'
);

const maceCounterValue = document.querySelector("#value");
let counterValue = 0;

targetBtnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  maceCounterValue.innerHTML = counterValue;
});

targetBtnIncrement.addEventListener("click", () => {
  counterValue += 1;
  maceCounterValue.innerHTML = counterValue;
});
