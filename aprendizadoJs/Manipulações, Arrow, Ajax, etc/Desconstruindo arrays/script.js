let array = [ 'Marcos dos Santos', 'Marcos', 'dos Santos', 'marcos.s.luiz'];

//let [ nomeCompleto, nome, sobrenome, instagram ] = array; //dar o nome da váriavel na ordem em que o array ta sendo criado

let [ nomeCompleto, , , instagram ] = array; //utilizando apenas array específicas ignorando as do meio, deixando espaços vazios com a vírgula

console.log(nomeCompleto,instagram);


let [Porshe, Mercedes, ano = 2022]  = ['911 gt3 rs', 'cl500']; //criando o array e o desconstuindo na mesma linha, e também definindo um valor padrão

console.log(Porshe, Mercedes, ano);


function criar() { //criando um array em uma função
    return [1,2,3];
}

let [a,b,c] = criar(); //desconstuindo array alocado na função

console.log(a,b,c);


