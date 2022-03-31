/* foram testados comandos que verificaram o tamanho do elemento texto no console

document.querySelector('.texto').clientWidth;
document.querySelector('.texto').clientHeight;
document.querySelector('.texto').offsettWidth;
document.querySelector('.texto').offsetHeight;
document.querySelector('.texto').scrollWidth;
document.querySelector('.texto').scrollHeight;
*/

//posicionar scroll

/*
function subirTela () {
    window.scrollTo(0, 0);
}
*/

//posicionar scroll suave abaixo

function subirTela () {
    window.scrollTo({ //definindo o comportamento do botão pela função dentro do objeto
        top: 0,
        left: 0,
        behavior: "smooth" //comportamento suave
    });
}

function decidirBotaoScroll() {
    if(window.scrollY === 0) {
        //ocultar o botao
        document.querySelector('.scrollbutton').style.display ='none';
    } else {
        //mostrar botão
        document.querySelector('.scrollbutton').style.display ='block';
    }
}

 // setInterval(decidirBotaoScroll, 2000);  // timer que executa a função de tempo em tempo

 window.addEventListener('scroll', decidirBotaoScroll);