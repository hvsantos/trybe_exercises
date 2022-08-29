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
let section_center_content = document.createElement('section');
section_center_content.className = 'center-content';
main_content.append(section_center_content);

// 4. 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let novo_p = document.createElement('p');
novo_p.innerText = 'Eu sou um paragrafo';
section_center_content.append(novo_p)


// 5. 🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let section_left_content = document.createElement('section');
section_left_content.className = 'left-content';
main_content.append(section_left_content);

// 6. 🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let section_right_content = document.createElement('section');
section_right_content.className = 'right-content';
main_content.append(section_right_content);

// 7. 🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
let small_image = document.createElement('img');
small_image.src = 'https://picsum.photos/200';
small_image.className = 'small-image';
section_left_content.append(small_image);

// 8. 🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let list_ol = document.createElement('ol');
section_right_content.append(list_ol);

for (let i = 1; i <= 10; i += 1) {
    let list_li = document.createElement('li');
    list_li.className = `item-lista-${i+1}`
    list_li.innerText = i;
    list_ol.append(list_li);
}

// 9. 🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
for (let i = 1; i <= 3; i+= 1) {
    let 
}