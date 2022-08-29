let pai_element = document.querySelector('#pai');
let pai_array = pai_element.childNodes;
console.log(pai_element);
console.log(pai_array);


pai_element.removeChild(pai_array[7]);
pai_element.removeChild(pai_array[5]);
pai_element.removeChild(pai_array[1]);

let element_element = document.querySelector('#elementoOndeVoceEsta');
let element_array = element_element.childNodes;
console.log(element_element);
console.log(element_array);

element_element.removeChild(element_array[3]);