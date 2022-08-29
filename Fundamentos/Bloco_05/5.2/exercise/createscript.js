// Vamos aos exercícios:
let html_body = document.querySelector('body')

// 1. 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let main_title = document.createElement('h1');
main_title.innerText = 'Exercício 5.2 - JavaScript DOM';
html_body.append(main_title);

// 2. 🚀 Adicione a tag main com a classe main-content como filho da tag body;
let main_content = document.createElement('main');
main_content.className = 'main-content';
html_body.append(main_content);

// 3. 🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let html_main = document.querySelector('.main-content')
let section_center_content = document.createElement('section');
section_center_content.className = 'center-content';
html_main.append(section_center_content);

// 4. 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let novo_p = document.createElement('p');
let html_section_center = document.querySelector('.center-content')
novo_p.innerText = 'Eu sou um paragrafo';
html_section_center.append(novo_p)


// 5. 🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let section_left_content = document.createElement('section');
section_left_content.className = 'left-content';
html_main.append(section_left_content);

// 6. 🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let section_right_content = document.createElement('section');
section_right_content.className = 'right-content';
html_main.append(section_right_content);

// 7. 🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;


// 8. 🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;


// 9. 🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.