const targetBtnDecrement = document.querySelector(
  'button[data-action="decrement"]'
);

const targetBtnIncrement = document.querySelector(
  'button[data-action="increment"]'
);

const counterValue = document.querySelector("#value");
counterValue.innerHTML = 0;

targetBtnDecrement.addEventListener("click", () => {
  counterValue.innerHTML--;
});

targetBtnIncrement.addEventListener("click", () => {
  counterValue.innerHTML++;
});
