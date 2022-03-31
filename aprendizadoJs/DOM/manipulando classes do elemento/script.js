function verde() {
    document.querySelector('#exemplo').classList.remove('vermelho','azul');
    document.querySelector('#exemplo').classList.add('verde');
}
function vermelho() {
    document.querySelector('#exemplo').classList.remove('verde','azul');
    document.querySelector('#exemplo').classList.add('vermelho');
}
function azul() {
    document.querySelector('#exemplo').classList.remove('verde','vermelho');
    document.querySelector('#exemplo').classList.add('azul');
}