const bodyPage = document.getElementById('id-body');
const textTitle = document.querySelector('.main-title');
const arrayFonts = ['Arial', 'Gill Sans Extrabold', 'monospace']

function saveThing(keyName, keyValue) {
  localStorage.setItem(keyName, keyValue);
}

// Gen Color
function generateColor() {
  const colorSelected = [];
  for (let i = 0; i < 3; i += 1) {
    colorSelected[i] = Math.floor(Math.random() * 255);
  }
  return `rgb(${colorSelected[0]}, ${colorSelected[1]}, ${colorSelected[2]})`;
}

// Change BG color
function changeBgColor(color) {
  bodyPage.style.backgroundColor = color;
  let textColor = color.substring(3);
  let selected = document.querySelector('#bg-sample-color');
  selected.innerText = textColor
  selected.style.color = color
}

// Function called when the button 'change-bgcolor' is clicked
function buttonBgColor() {
  const newColor = generateColor();
  changeBgColor(newColor);
  saveThing('bgColor', newColor);
}

// Function that keeps the BG Color on reload
function keepBgColor() {
  if (localStorage.bgColor){
    const color = localStorage.bgColor
    changeBgColor(color);
  }
}

// Change text color
function changeTxtColor(color) {
  textTitle.style.color = color;
  let textColor = color.substring(3);
  let selected = document.querySelector('#txt-sample-color');
  selected.innerText = textColor
  selected.style.color = color
}

// Function called when the button 'change-textcolor' is clicked
function buttonTxtColor() {
  const newColor = generateColor();
  changeTxtColor(newColor);
  saveThing('txtColor', newColor);
}

// Function that keeps the BG Color on reload
function keepTxtColor() {
  if (localStorage.txtColor){
    const color = localStorage.txtColor
    changeTxtColor(color);
  }
}


// Function to change Font Size
function changeFontSize(value) {
  textTitle.style.fontSize = value;
  let selected = document.querySelector('#font-size-sample');
  selected.innerText = value
}

// Function called when the button 'change-fontsize' is clicked
function buttonFontSize() {
  let fontSize = Math.floor(Math.random() * 50);
  fontSize += 'px'
  changeFontSize(fontSize);
  saveThing('fontSize', fontSize);
}

// Function that keeps the Font Size on reload
function keepFontSize() {
  if (localStorage.fontSize){
    const value = localStorage.fontSize
    changeFontSize(value);
  }
}

// Function that changes the Line Height
function changeSpaceLine(value) {
  textTitle.style.lineHeight = value;
  document.querySelector('#space-line-sample').innerText = value;
}

// Function called when the button 'change-spaceline' is clicked
function buttonSpaceLine() {
  let spaceLine = Math.floor(Math.random() * 10);
  changeSpaceLine(spaceLine);
  saveThing('spaceLine', spaceLine);
}

// Function that keeps the Line Height on reload
function keepSpaceLine() {
  if (localStorage.spaceLine){
    const value = localStorage.spaceLine
    changeSpaceLine(value);
  }
}

// Function that changes the Font Family
function changeFontFamily(font) {
  textTitle.style.fontFamily = font;
  document.querySelector('#font-family-sample').innerText = font;
}

// Function called when the button 'change-fontfamily' is clicked
function buttonFontFamily() {
  const numF = Math.floor(Math.random() * 3);
  const fontFamily = arrayFonts[numF];
  changeFontFamily(fontFamily);
  saveThing('fontFamily', fontFamily);
}

// Function that keeps the Font Family on reload
function keepFontFamily() {
  if (localStorage.fontFamily){
    const value = localStorage.fontFamily
    changeFontFamily(value);
  }
}

document.getElementById('change-bgcolor').addEventListener('click', buttonBgColor);
document.getElementById('change-textcolor').addEventListener('click', buttonTxtColor);
document.getElementById('change-fontsize').addEventListener('click', buttonFontSize);
document.getElementById('change-spaceline').addEventListener('click', buttonSpaceLine);
document.getElementById('change-fontfamily').addEventListener('click', buttonFontFamily);


keepBgColor();
keepTxtColor();
keepFontSize();
keepSpaceLine();
keepFontFamily();