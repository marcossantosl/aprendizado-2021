const carros = ['porshe', 'ferrari','nissan', 'ford', 'toyota', 'honda', 
    function() {
        console.log('A nissan é a melhor');
    }
];

console.log(carros[5]);

carros [6]();// assim se executa/retorna uma função dentro de um array 

const ingredientes = [
    ['uva','maça','pera'],
    ['arroz','macarrão']
];

console.log(ingredientes[1][1]);//está retornando o segundo ítem do primeiro array dentro do array.
