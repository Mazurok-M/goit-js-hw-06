const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onTextInputChange);

function onTextInputChange(event) {
  if (event.currentTarget.value.length >= inputEl.getAttribute("data-length")) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
