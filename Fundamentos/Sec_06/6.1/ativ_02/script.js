// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function genericOne(event) {
  event.preventDefault();
}

HREF_LINK.addEventListener('click', genericOne);
INPUT_CHECKBOX.addEventListener('click', genericOne);

function blockAll(event) {
  let keyPressed = event.key
  if (keyPressed === 'a') {
    return
  }
  genericOne(event)
}

INPUT_TEXT.addEventListener('keypress', blockAll)