// Vamos aos exercícios:
let html_body = document.querySelector('body')

// 1. 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let novo_h1 = document.createElement('h1');
novo_h1.innerText = 'Exercício 5.2 - JavaScript DOM';
html_body.append(novo_h1);

// 2. 🚀 Adicione a tag main com a classe main-content como filho da tag body;
let novo_main = document.createElement('main');
novo_main.className = 'main-content';
html_body.append(novo_main);

// 3. 🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let html_main = document.querySelector('main')
let novo_section = document.createElement('section');
novo_section.className = 'center-content';
html_main.append(novo_section);

// 4. 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;


// 5. 🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;


// 6. 🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;


// 7. 🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;


// 8. 🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;


// 9. 🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.