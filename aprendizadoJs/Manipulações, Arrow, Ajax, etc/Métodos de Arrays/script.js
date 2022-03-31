let lista = ['ovo','farinha','fermento','leite','margarina'];

let res = lista.toString();//é possível transformar um array em uma string separados por virgula

console.log(res);

//

let r = lista.join('-');//passa pra string, e os ítens do Atrray são separados pelo caractere definido no parâmetro

console.log(r);

//

let resultado = lista.indexOf('farinha');//retorna a posição do ítem pelo índex of, e se ele não acha retorna -1

console.log(resultado);

//

lista.pop();//remove o último ítem do array
lista.shift();//remove o primeiro ítem do Array
lista.push('Merenda');//adiciona um ítem no Array
lista[1] = 'Liquidificador';//substitui o valor do array no índice 1 por liquidificador
lista[4] = 'Plug';//adiciona o valor plug ao índice 
lista[ lista.length ] = 'Banana';//adiciona ítem ao próximo índice verificando quantidade de arrays

let resposta = lista;

console.log(resposta);










