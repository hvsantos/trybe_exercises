// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

// 🚀 Adicione a classe title na tag h1 criada;
main_title.className = 'title';

// 🚀 Adicione a classe description nas 3 tags h3 criadas; (Feito junto à 9 do outro script)

// 🚀 Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
main_content.removeChild(section_left_content);

// 🚀 Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
section_right_content.style.marginRight = 'auto';

// 🚀 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
section_center_content.style.backgroundColor = 'green';

// 🚀 Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
let item_list_9 = document.querySelector('.item-lista-9');
let item_list_10 = document.querySelector('.item-lista-10');
list_ol.removeChild(item_list_9);
list_ol.removeChild(item_list_10);