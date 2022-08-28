/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício) */
document.querySelectorAll("p")[1].innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit."

/* 2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)). */
document.querySelector(".main-content").style.backgroundColor = 'rgb(76,164,109)';

/* 3. Crie e execute uma função que mude a cor do quadrado vermelho para branco. */
document.querySelector(".center-content").style.backgroundColor = 'white';

/* 4. Crie e execute uma função que corrija o texto da tag <h1>. */
document.querySelector(".title").innerText = "Exercício 5.1 - Javascript";

/* 5. Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo. */
const tag_p = document.querySelectorAll("p");
tag_p[0].innerText = tag_p[0].innerText.toUpperCase()
tag_p[1].innerText = tag_p[1].innerText.toUpperCase()
tag_p[2].innerText = tag_p[2].innerText.toUpperCase()

/* 6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console. */
for (let i = 0; i < tag_p.length; i += 1) {
    console.log(tag_p[i]);
}