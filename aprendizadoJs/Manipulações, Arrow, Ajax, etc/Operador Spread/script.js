let numeros = [1, 2, 3, 4];

let outros = [...numeros, 5, 6, 7, 7]; //complemetando a array outros com a array numeros

console.log(outros);

let info = {
    nome: 'Marcos',
    sobrenome: ' dos Santos',
    idade: 17
};

novaInfo = {
    ...info,
    cidade: 'Araranguá',
    estado: 'SC'
}; //complementando o objeto novaInfo com o objeto info

console.log(novaInfo);

function adicionarInfo(info) {
    let novasInfo = {
        ...info,
        status: 0,
        token: 'skfagdskad',
        data_cadastro: '24/05'
    }
    return novasInfo;
};

console.log(adicionarInfo({nome:'Marcos',sobrenome:'Santos'})); //complementando quantos ítens quiser no objeto dessa forma