let nome ='Marcos dos Santos Luiz';

//let resultado = nome.length; // define a quantia de caracteres no nome

let resultado ='';

 if(nome.indexOf('Marcos',) > -1){//index of define a posição que aquele texto se encontra, e se ele não acha retorna -1
    resultado = 'Achou ';
 } else {
     resultado = 'Não achou';
 }

 console.log(resultado);
 
 //extrair nomes de strings

 let carro = 'Mitsubishi lancer evolution 4';

 let resultados = carro.slice(0,10); // pega os caracteres da posição zero a posição 10, substring substitui também, porém sem os parâmetros negativos
let marimo = carro.substr(11,38); //primeiro parâmetro = posição inicial; segundo patrametro = quantia de caracteres a partir da posição inicial, funciona com valores negativos

console.log(resultados);
console.log(marimo);

//substituir textos específicos em uma string


let r = nome.replace('Luiz','Borges');//substitui um valor, primeiro parâmetro: string desejada; segundo parâmetro: texto substituto

console.log(r);

//Letras MAÍUSCULAS, minúsculas, concatenação e remoçãodeespaços.

let m = nome.toUpperCase();
let n = nome.toLowerCase();
let c = nome.concat(' FUNÇÃO INÚTIL ESSA NÃO USE PRA CONCATENAR');
let cc = nome+ " esse é o jeito mais útil de concatenar confia";
let er = nome.trim();//retira espaços, por algum motivo não funcionou aqui

console.log(m);
console.log(n);
console.log(c);
console.log(cc);
console.log(er); //tentei usar um log usando vários parâmetros mas não consegui querbrar linha

//extrair apenas um caractere da string

let posicaocarac = nome.charAt(12); //retorna a posição do caractere, substr faz o mesmo, .substr(12, 1); mesmo resultado
let posicaocarac2 = nome[12]; //mesmo resultado apenas usando o índice também

console.log(posicaocarac); 
console.log(posicaocarac2);

//dividir string transformando em array

let dividir = nome.split(' ');//quando a função encontra um espaço, corta o nome, a cada corte de string forma um ítem de array

console.log(dividir);



 



