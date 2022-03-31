let v1 = Math.PI; //Math: função q representa matemática, com o pi ele retorna o pi
let v2 = Math.round(3.36456); //arredonda pra um número inteiro
let v3 = Math.floor(3.99); //arredonda pra um número sempre pra baixo, mesmo sendo 3.99
let v4 = Math.ceil(3.1); //arredonda pra cima
let v5 = Math.abs( - 9.34); // define o número absoluto, parecido com o módulo em matemática
let v6 = Math.min(3, 5, 8 , 6 ,-1, -500, 100);//retorna o menor número
let v7 = Math.max(1, 5, -6, 1000000, 99999999, 45);//retorna o maior número
let v8 = Math.floor(Math.random() * 100); //retorna um número aleatório naturalmente entre 0 e 1, mas multiplicando por algum número e o arredondando sempre pra baixo pode-se gerar um número aleatório entre 0 e o número multiplicado


console.log(v1, v2, v3, v4, v5, v6, v7);
console.log(v8);