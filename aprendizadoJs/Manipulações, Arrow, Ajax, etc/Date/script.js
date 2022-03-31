
//definir data

let d = new Date(2022, 1 , 1, 14, 20); //objeto que pega a data desfinida, ou se não a atual, quando não são definidos parâmetros
let e = new Date('2022-02-01 14:20:00');//definido com único parâmetro em date string
let f = new Date(2022, 1);//o mínimo pra gerar uma data pelos parâmetros

console.log( d);//retorna a data 
console.log( d.toDateString());//retorna a data resumida
console.log( d.toUTCString());//retorna a data com o fuso padrão

console.log(e);
console.log(f);

//exibir data detalhadamente

let g = new Date();

let ano = g.getFullYear();//retorna o ano do date em number
let mes = g.getMonth();//retorna o mês date em number
let diasemana = g.getDay();//retorna o dia da semana vai de 0 a 6, começa no domingo
let diames = g.getDate();//retorna o dia do mês
let hora = g.getHours();//retorna a hora em number
let minutos = g.getMinutes();//retorna os minutos do date em number
let segundos = g.getSeconds();//retorna os segundos do date em number
let milisegundos = g.getMilliseconds();//retorna os Milisegundos do date em number

console.log('Ano: ',ano,' Mês: ', mes+1, ' Dia da semana: ', diasemana, ' Dia do mês: ', diames, ' Hora: ', hora,' Minuto: ', minutos,' Segundo: ', segundos, ' Milisegundos: ',milisegundos);

let timemili = g.getTime();//quantidade de milisegundos desde 1970 até hj

let data = Date.now(); //define a data atual sem precisar definir um novo objeto

console.log(timemili, '', data);

//manipular data

g.setFullYear(2025);// trocar o ano
g.setMonth(11); //trocar o Mês

//basicamente pra trocas se utiliza os comandos ja conhecidos, porém com o set n frente

g.setDate(g.getDate() + 5); //pegando na data o dia do mês, e alterando ele colocando 5 dias pra frente

console.log(g); // agora a data do g sera definida dia 6 e não dia 1,e o mes será  dezembro e o ano 2025

//UTILIZADO QUANDO SÃO SETADOS PRAZOS DE VALIDADES POR EXEMPLO, DE EVENTOS EM UM SISTEMA