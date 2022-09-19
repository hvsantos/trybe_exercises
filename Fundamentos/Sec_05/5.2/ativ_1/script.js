let element_where = document.querySelector("#elementoOndeVoceEsta");
element_where.parentNode.style.backgroundColor = 'green';

let child_Nodes = element_where.childNodes;
child_Nodes[1].innerText = "Filhao";

let paizao = document.querySelector("#pai")
console.log(paizao.firstElementChild);

console.log(element_where.previousElementSibling);

console.log(element_where.parentElement.innerText);

let testpai = element_where.parentElement.childNodes;
console.log(testpai[5]);

console.log(paizao.childNodes[5]);