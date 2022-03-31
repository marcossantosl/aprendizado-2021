let lista = [45, 6, 34, 8, 17, 26];
let lista2 = [];

lista2 = lista.map(function(item){ //map percorre todos os ítens do array e executa função definida no parâmetro, gerando um novo array, pode ser reaproveitada ao contrário do for
    return item * 2;
});

let res = lista2;
console.log(res);

/*for (let i in lista) {  //mesma coisa que o de cima usando o for
    lista2.push(lista[i] * 2);
}*/

 //filtra os Arrays

 lista3 = lista.filter(function(i){// filtra, rodando a função ele retorna verdadeiro ou falso, aproveitando ou não o ítem do Array
     if (i< 20) {
         return true;
     } else {
         return false; //se o ítem retorna falso ele não aparece no array
     }
 });

 console.log(lista3);
 
 //se todos is ítens forem verdadeiros ele retorna verdadeiro, se não retorna falso

 lista4 = lista.every(function(i){// filtra, rodando a função ele retorna verdadeiro ou falso, aproveitando ou não o ítem do Array
    if (i< 100) {
        return true;
    } else {
        return false; 
    }
});

console.log(lista4);

 //se um for verdadeiro ele retorna verdadeiro, se não retorna falso

 lista5 = lista.some(function(i){// filtra, rodando a função ele retorna verdadeiro ou falso, aproveitando ou não o ítem do Array
/*if (i< 20) {
        return true;
    } else {
        return false; 
    }
}*/
return (i > 3)? true : false;//modo mais simplificado de construir a condição de verdadeiro ou falso
});

console.log(lista5);

