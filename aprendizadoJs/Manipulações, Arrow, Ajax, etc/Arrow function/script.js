/* function somar(x, y) {
 return x + y;
 }//método tradicional de função*/

/*let somar = function(x, y){
    return x+y;
} //método por atribuição de variável*/

/*let somar = (x, y) => {
    return x + y; //função utilizando arrow function
}*/

let somar = (x,y) => x + y; //expressão direta sem chaves, não necessita de return quando não há chaves

console.log(somar(10, 5));

let letrasnoNome = nome => nome.length; // quando há apenas uma variável parênteses se torna opicional

console.log(letrasnoNome("Marcos"));