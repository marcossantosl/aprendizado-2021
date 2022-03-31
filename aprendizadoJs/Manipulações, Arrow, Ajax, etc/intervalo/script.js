let timer;//criando a variável timer fora dos escopos das funções
let timer2;

function showTime() { //função para mostrar o timer
    let d = new Date();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let ms = d.getMilliseconds();
    let txt = m+':'+s+':'+ms;
   
    document.querySelector('.demo').innerHTML = txt;
};


function start() {
    timer = setInterval(showTime, 31);//definindo atualização do timer de 31 em 31 milisegundos, esta na variável timer para ser utilizado no clearInterval
}

function stop() {
    clearInterval(timer);//cancelando o timer
}

function rodar() {
    timer2 =  setTimeout(function(){  //definindo um tempo determinado a ser esperado para rodar a função
    document.querySelector('.demo').innerHTML = "RODOU";
},3000);
}

function parar() {
    clearTimeout(timer2);//antídoto do setTimeout, adia a execução antes de executar
}