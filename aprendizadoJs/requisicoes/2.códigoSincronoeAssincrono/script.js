//CÓDIGO SÍNCRONO 
let nome = 'Marcos';
let sobrenome = ' Santos';
let nomeCompleto =`Seu nome completo é ${nome + sobrenome}`;

console.log(nomeCompleto);

//CÓDIGO ASSÍNCRONO 
let nome2 = 'Marcos';
let sobrenome2 = 'Marcos';
let temperatura = Maquininha.pegarTemperatura(); //LINHA DE CÓDIGO ASSÍNCRONO, POIS LEVA MAIS TEMPO PRA EX3ECUTAR A FUNÇÃO, ENQUANTO ISSO ELE PULA PRA PRÓXIMA LINHA
let nomeCompleto2 =`Seu nome completo é ${nome2 + sobrenome2}`;