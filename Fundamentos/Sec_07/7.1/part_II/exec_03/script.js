const clickButton = document.getElementById('btn-click');
const textClicks = document.getElementById('click-count');
let cliques = 0;
clickButton.addEventListener('click', () => {
  cliques += 1;
  textClicks.innerText = `vezes: ${cliques}`;
})