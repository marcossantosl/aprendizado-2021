var X  //DECLARA UMA VARIÁVEL

//VALORES PODEM SER ATRIBUIDOS ÀS VARIÁVEIAS COM O SINAL DE IGUAL

x = 0;  //AGORA X TEM O VALOR 0
x  // => 0: UMA VARIÁVEL É AVALIADA COM SEU VALOR

//TIPOS DE DADOS

x = 1; //NÚMEROS
X = 0.01; //TIPO NUMBER PARA INTEIROS E REAIS
x = "hello world"; //STRINGS DE TEXTO ENTRE ASPAS
x = 'JavaScript'; //APÓSTROFOS TAMBÉM DELIMITAM STRINGS
x = true ;//VALOR BOLEANO    
x = false; //OUTRO VALOR BOLEANO
x = null ;//DEFINE UM VALOR ESPECIA QUE SIGNIFICA "NENHUM VALOR"
X = undefined ;// MESMA COISA QUE NULL

//Dois outros tipos muito importantes que programas em JavaScript podem manipular são objetos e
//arrays. Esses são os temas do Capítulo 6, Objetos, e do Capítulo 7, Arrays, mas são tão importantes
//que você vai vê-los muitas vezes antes de chegar a esses capítulos.

// O tipo de dado mais importante de JavaScript é o objeto 
// Um objeto é uma coleção de pares nome/valor ou uma string para mapa de valores

var book = {                  //Objetos são colocados entre chaves
    topic: "JavaScript",      //A propriedade "topic" tem valor "JavaScript"
    fat: true                 //A propriedade "fat" tem valor true
}   ;                          //A chave marca o fim do objeto


//Acesse as propriedades do objeto com . ou []:

book.topic   // => "JavaScript"
book["Fat"] // => true: Outro modo de acessar valores de propriedade
book.author = "Flanagan"; // Crie novas propriedades por meio de atribuição
book.contents = {}; // {} é um objeto vazio sem qualquer propriedade

//JavaScript também aceita arrays (listas indexadas numericamente) de valores.

var primes = [2, 3, 5, 7] ; // Um array de 4 valores, delimitados com [ e ].
primes[0]    //=> 2: o primeiro elemento (índice 0) do array.
primes.lenght  // => 4: a quantidade de elementos no array
primes[primes.lenght-1]  // 7: o último elemento do array
primes[4] = 9; // Adiciona um novo elemento por meio de atribuição
primes[4] = 11; //Altera um elemento existente por meio de atribuição
var empty = [] ;// [] é um array vazio, sem qualquer elemento
empty.lenght // => 0

// Os arrays e objeto podem conter outros arrays e objetos:

var points = [ //Um array com 2 elementos
    {x:0, y:0},// Cada elemento é um objeto
    {x:1, y:1}
];

// Os arrays e objetos podem conter outros arrays e objetos:

var points = {                   //Um objeto com 2 propriedades
    trial1: [[1,2], [3,4]],      //O valor de cada propriedade é um array
    trial2: [[2,3],[4,5]],       //Os elementos dos arrays são arrays
};

//A sintaxe ilustrada anteriormente para listar elementos de array entre chaves ou para mapear nomes
//de propriedade de objeto em valores de propriedade entre colchetes é conhecida como expressão inicializadora e é apenas um dos assuntos do Capítulo 4, Expressões e operadores. Uma expressão é uma
//frase em JavaScript que pode ser avaliada para produzir um valor. O uso de . e [] para se referir ao valor de uma propriedade de objeto ou a um elemento de array é uma expressão, por exemplo. Talvez
//você tenha notado no código anterior que, quando uma expressão aparece sozinha em uma linha, o
//comentário que se segue começa com uma seta (=>) e o valor da expressão. Essa é uma convenção
//que você vai ver por todo o livro.
//Uma das maneiras mais comuns de formar expressões em JavaScript é usar operadores, como segue:

//Os operadores atuam sobre os valores (operandos) para produsir um novo valor.
//os operadores aritimétivos são os mais comuns:

3 + 2  // => 5: adição 
3 * 2 // => 6: Multipplicação 
3 / 2 // => 1.5: Divisão 
points[1].x - points[0].x  // => 1: operações mais complicadas também funcionam
"3" + "2" // => "32": + soma números, mas também concatena strings

// JavaScript define alguns operadores aritméticos de forma abreviada

var count = 0;  //Define uma variável
count++; //Incrementa a variável
count--; //Decrementa a variável
count += 2; //Soma 2: o mesmo que count = count + 2
count *= 3; //Multiplica 3: o mesmo que count = count *3
count //Nomes de váriaveis também são expressões.

// Os operadores de igualdade e relacionais testam se dois valores são iguais,
// desiguais, menores que, maiores que, etc. São avaliados como verdadeiros ou falsos.

var x = 2, y = 3; //Esses sinais =são atribuições e não testes de igualdade

x == y // => falso: igualdade
x != y // => verdadeiro: desigualdade
x < y  // => verdadeiro: menor que
x > y  // => falso: maior que
x >= y // => falso: maior ou igual a
"two" == "three" // => falso: as strings são diferentes
"two" > "three" // => verdadeiro: "tw" é alfabeticamente maior que "th"
false == (x > y) // => verdadeiro: falso é igual a falso

// Os operadores lógicos combinam ou invertem valores booleanos

(x == 2) && (y == 3) // verdadeiro: as duas comparações são verdadeiras. && é E
(x > 3 ) || (y > 3)  // falso: nenhuma das comparações é verdadeira. || é OU
!(x == y) //verdadeiro: ! inverte um valor booleano

//Se as frases em JavaScript são expressões, então as sentenças completas são instruções, as quais são
//o tema do Capítulo 5, Instruções. No código anterior, as linhas que terminam com ponto e vírgula
// são instruções. (No código a seguir, você vai ver instruções de várias linhas que não terminam com
//ponto e vírgula.) Na verdade há muita sobreposição entre instruções e expressões. Em linhas gerais,
//uma expressão é algo que calcula um valor, mas não faz nada: ela não altera o estado do programa
//de modo algum. As instruções, por outro lado, não têm um valor (ou não têm um valor com que
//nos preocupemos), mas alteram o estado. Você viu declarações de variável e instruções de atribuição
//anteriormente. A outra categoria abrangente de instrução são as estruturas de controle, como as condicionais e os laços. Exemplos aparecerão a seguir, após abordarmos as funções.
//Uma função é um bloco de código JavaScript nomeado e parametrizado que você define uma vez
//e, então, pode chamar repetidamente. As funções não serão abordadas formalmente até o Capítulo
//8, Funções, mas, assim como os objetos e arrays, você vai vê-las muitas vezes antes de chegar a esse
//capítulo. Aqui estão alguns exemplos simples:

// As funções são blocos de código JavaScript parametrizados que podemos chamar.

var x = 2, y = 3;

function plus1(x) { //Define uma função chamada "plus1", com o parâmetro "x"
    return x + 1; //Retorna um valor uma unidade maior do que o que foi passado
} //As funções são incluídas entre chaves

plus1(y) // => 4: y é 3; portanto, essa chamada retorna 3 + 1

var square = function(x){  //Funções são valores que podem ser atribuidas a variáveis
    return x * x; // Calcula o valor da função 
}; //Ponto e vírgula marca o fim da expressão

square (plus1(y)) // => 16: chama duas funções em uma única expressão
