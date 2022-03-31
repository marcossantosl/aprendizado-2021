function menuTogle() {
    let menuArea = document.querySelector('#menu-area');
    
    if (menuArea.style.width == '0px') {
        menuArea.style.width = '200px';
    } else {
    menuArea.style.width = '0px';
    };
}; //esse evento como dito antes, pode ser realizado por troca de classe, criando uma classe no css onde o width é de 200px e substituindo de acordo com  a ocasião

/*function menuTogle() {
    let menuArea = document.querySelector('#menu-area');
    
    if (menuArea.classList.contains('abrir-menu') == true) {// se tiver a classe abrir-menu no elemento
    menuArea.classList.remove('abrir-menu');  //remove abrir menu
    } else { //se não
    menuArea.classList.add('abrir-menu'); //adiciona abrir-menu
    }   
};*/