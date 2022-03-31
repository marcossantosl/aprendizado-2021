function add(...numeros) {
 console.log(numeros);
}  

add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //operador rest (...) permite passar uma quantidade ilimitada de parâmetros


// SPREAD COM REST
function adicionar(nomes, ...novosNomes) { //rest no parâmetro para poder adicionar vários nomes 

    let novoConjunto = [
        ...nomes,
        ...novosNomes, //incluindo os valores das variáveis que vão herar os parâmetros dentro do objeto
    ]

    return novoConjunto;
}

let nomes = ["Marcos","Paulo"];

let outros = adicionar(nomes, "José", "Maria","Carlos"); //colocando a função junto com o objeto dentro da variável outros

console.log(outros);