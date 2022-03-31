let lista = [45, 6, 34, 8, 16, 17, 26];
let lista2 = [];

lista2 = lista.find(function(item/* index, array */){ //retorna o primeiro ítem que satisfaz as condições, se não tiver nenhum com as condições retorna undefined
    return(item <= 6)? true:false;
});

console.log(lista2);

//

lista3 = lista.findIndex(function(item/* index, array */){ //retorna a posição do primeiro ítem que satisfaz as condições, se não tiver retorna -1
    return(item <=6)? true:false;
});

console.log(lista3);

//exemplo prático find

let users = [
    {id:1, nome: 'Jesus', sobrenome: 'Cristo'},
    {id:2, nome: 'Galo', sobrenome: 'Cego'},
    {id:3, nome: 'Relampago', sobrenome: 'Marquinhos'}
];

let usuario = users.find(function(item){
    return(item.sobrenome == 'Cego') ? true : false; //encontrou o usuário com o sobrenome cego
});

console.log(usuario);
