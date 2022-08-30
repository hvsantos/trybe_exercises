const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

firstLi.className = "";

firstLi.addEventListener("click", addTechToLi);
secondLi.addEventListener("click", addTechToLi);
thirdLi.addEventListener("click", addTechToLi);

function addTechToLi(event) {
	firstLi.className = "";
	secondLi.className = "";
	thirdLi.className = "";
	techSelected = event.target;
	techSelected.className = "tech";
}

input.addEventListener("input", addTextToTech);
var techSelected = "";
function addTextToTech(event) {
	let text_array = [];
	text_array.push(event.target.value);
	techSelected.innerText = text_array;
}

myWebpage.addEventListener("dblclick", redirectToLinkedIn);

function redirectToLinkedIn() {
	window.location.href = "https://github.com/hvsantos/";
}

myWebpage.addEventListener("mouseover", changeColorAlternative);

function changeColorAlternative(event) {
	event.target.style.backgroundColor = "green";
}

//

myWebpage.addEventListener("mouseleave", changeColorDefault);

function changeColorDefault(event) {
	event.target.style.backgroundColor = "#333333";
}
