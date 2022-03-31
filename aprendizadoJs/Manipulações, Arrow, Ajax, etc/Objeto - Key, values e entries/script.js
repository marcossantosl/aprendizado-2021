let lista = ["arroz", "café", "feijão", "macarrão"];

console.log(Object.keys(lista)); //mostra os índices do array lista
console.log(Object.values(lista)); //mostra os valores do array lista
console.log(Object.entries(lista)); //cria um array pra cada ítem com o índice e o valor

let lista2 = {
    nome: "Marcos",
    idade: 17,
    cidade: "Araranguá"
};

console.log(Object.keys(lista2)); //mostra os nomes das chaves do objeto
console.log(Object.values(lista2)); //mostra os valores do objeto
console.log(Object.entries(lista2)); //cria um array pra cada ítem com a chave e o valor