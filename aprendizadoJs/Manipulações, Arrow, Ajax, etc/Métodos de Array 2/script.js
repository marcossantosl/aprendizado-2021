let lista = ['ovo','farinha','fermento','leite','margarina'];
let lista2 = ['Prato', 'Liquidificador', 'Forno'];

//remover ítens do Array

delete lista[1];//deleta o array no índice 1, mas mantém o slot do índice

let res = lista;

console.log(res);

//

lista.splice(1, 1); // (a partir de qual ítem remover, quantos ítens remover)

var res2 = lista;

console.log(res2);

//concatena arrays

let res3 = lista.concat(lista2);//concatena 2 arrays

console.log(res3);

//ordenar arrays

lista.sort(); //concatena array em ordem alfabetica
lista.reverse();//inverte ordem dos arrays

let res4 = lista;

console.log(res4);

