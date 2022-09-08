let html_body = document.querySelector("body");

let main_title = document.createElement("h1");
main_title.innerText = "Exercício 5.2 - JavaScript DOM";
html_body.append(main_title);

let main_content = document.createElement("main");
main_content.className = "main-content";
html_body.append(main_content);

let section_center_content = document.createElement("section");
section_center_content.className = "center-content";
main_content.append(section_center_content);

let novo_p = document.createElement("p");
novo_p.innerText = "Eu sou um paragrafo";
section_center_content.append(novo_p);

let section_left_content = document.createElement("section");
section_left_content.className = "left-content";
main_content.append(section_left_content);

let section_right_content = document.createElement("section");
section_right_content.className = "right-content";
main_content.append(section_right_content);

let small_image = document.createElement("img");
small_image.src = "https://picsum.photos/200";
small_image.className = "small-image";
section_left_content.append(small_image);

let list_ol = document.createElement("ol");
section_right_content.append(list_ol);

for (let i = 1; i <= 10; i += 1) {
	let list_li = document.createElement("li");
	list_li.className = `item-lista-${i}`;
	list_li.innerText = i;
	list_ol.append(list_li);
}

for (let i = 1; i <= 3; i += 1) {
	let h3_title = document.createElement("h3");
	h3_title.className = "description";
	main_content.append(h3_title);
}
