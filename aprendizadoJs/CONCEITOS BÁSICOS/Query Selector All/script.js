console.log(document.getElementsByClassName('subtitulo')); //seleciona os elementos com a classe subtitulo no log
console.log(document.querySelectorAll('.subtitulo')); //seleciona todos os elementos com a classe subtitulo no log, só que usando o query selector

console.log(document.querySelectorAll( 'ol.lista'));//seleciona todas as classes listas de listas ordenadas
console.log(document.querySelectorAll( 'ul.lista'));//seleciona todas as classes listas de listas não ordenadas

console.log(document.querySelector( 'ol.lista'));//seleciona apenas  aprimeira classe de lista ordenada
console.log(document.querySelector( 'ul.lista'));//seleciona apenas a primeira classe de lista não ordenada

console.log(document.querySelector( '.lista'));//seleciona o primeiro elemento com classe lista
console.log(document.querySelectorAll( '.lista'));//seleciona todos os elementos com a classe lista

//quando existe mais de uma classe id ou elemento, e é usado o QuerySelectorAll, getElementsById ou getElementsByClass Name, o valor é retornado em um Array.

let lista = document.querySelectorAll('li'); //selecionando todas as tags i

for(let i in lista) { // percorrendo todas as tags i
    lista[i].style.color = '#FF0000'; //definindo a cor de cada tag li de vermelho
}

