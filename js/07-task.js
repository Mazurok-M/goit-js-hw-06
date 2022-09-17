const inputEl = document.querySelector("#font-size-control");

inputEl.addEventListener("input", handleClick);
const spanTextEl = document.querySelector("#text");

function handleClick(event) {
  spanTextEl.style.fontSize = event.currentTarget.value + "px";
}
