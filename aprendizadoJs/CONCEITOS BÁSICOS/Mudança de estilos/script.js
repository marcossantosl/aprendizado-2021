function verde() {
    limpar();
    document.querySelector('#exemplo').classList.add('verde');
}
function vermelho() {
    limpar();
    document.querySelector('#exemplo').classList.add('vermelho');
}
function azul() {
    limpar();
    document.querySelector('#exemplo').classList.add('azul');
}

function limpar() {
    document.querySelector('#exemplo').classList.remove('verde', 'azul' , 'vermelho');
} 

function mostrar(e) {
    e.style.display = 'none'; // trocar a propriedade de estilo  display do botão mostrar elemento, usando um id ou uma class no botão, e um queryselector funciona da mesma maneira
    document.querySelector('#telefone').style.display = 'block'; // [e possível também criar uma classe e substituir ela, causando o mesmo resultado
}