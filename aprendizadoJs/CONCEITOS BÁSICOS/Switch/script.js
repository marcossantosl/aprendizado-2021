let dia = 6;
let diaNome = '';
let diaComercial = '';

switch(dia) { //valor
    case 1: // caso
        diaNome= 'Segunda feira'; //for verdadeiro
        break; //pare, ao contrário continue a execução
    case 2:
        diaNome='Terça feira';
        break;
    case 3: 
        diaNome='Quarta feira';
        break;
    case 4:
        diaNome='Quinta feira';
        break;
    case 5: 
        diaNome='Sexta feira';
        break;
    case 6:
        diaNome='Sábado';
        break;
    case 7:
        diaNome='Domingo';
        break;
} //condição específica

document.getElementById("dia").innerHTML = "Hoje é: "+diaNome;

switch(dia) {
    case 6:
    case 7:
        diaComercial = 'Final de semana';
        break;
    default:
        diaComercial ='Dia de semana';
        break;
}//condição geral

document.getElementById("comercial").innerHTML = "Hoje é: "+diaComercial;