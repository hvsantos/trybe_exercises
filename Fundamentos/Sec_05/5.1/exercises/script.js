document.querySelectorAll("p")[1].innerText =
	"Lorem ipsum dolor sit, amet consectetur adipisicing elit.";

document.querySelector(".main-content").style.backgroundColor =
	"rgb(76,164,109)";

document.querySelector(".center-content").style.backgroundColor = "white";

document.querySelector(".title").innerText = "Exercício 5.1 - Javascript";

const tag_p = document.querySelectorAll("p");
tag_p[0].innerText = tag_p[0].innerText.toUpperCase();
tag_p[1].innerText = tag_p[1].innerText.toUpperCase();
tag_p[2].innerText = tag_p[2].innerText.toUpperCase();

for (let i = 0; i < tag_p.length; i += 1) {
	console.log(tag_p[i]);
}
