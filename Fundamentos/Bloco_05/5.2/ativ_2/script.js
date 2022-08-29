let pai_child = document.createElement('section');
pai_child.id = "novo-irmao";
document.querySelector('#pai').append(pai_child);

let element_child = document.createElement('section');
element_child.id = "novo-filho";
document.querySelector('#elementoOndeVoceEsta').append(element_child);

let children_child = document.createElement('section');
children_child.id = "novo-filho-do-filho";
document.querySelector('#primeiroFilhoDoFilho').append(children_child);

let ficougrandedemais = document.querySelector('#novo-filho-do-filho').parentElement.parentElement.parentElement.childNodes;
console.log(ficougrandedemais[5]);