let telefone = '10';

console.log( telefone.padEnd(9, "*")); //parâmetro: quandos caracteres minha string tem que ter obrigatoriamente, caractere para preenchimento da string caso não comprir quantidade de caracteres mínimos
console.log( telefone.padStart(9, "*"));//igual padstart mas ele preenche antes



let cartao = '1234 1234 1234 1234';

let = lastDigits = cartao.slice(-4)//pegar os últimos 4 dígitos do cartão

let cartaoMascarado = lastDigits.padStart(16, '*');//ocultar 12 primeiros dígitos do cartão


console.log('Esse é seu cartão',cartaoMascarado);