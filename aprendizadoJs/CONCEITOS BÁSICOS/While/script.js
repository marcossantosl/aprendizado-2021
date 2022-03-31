let html = '';
let c = 1;

while(c <= 10) {
    html += "Número: "+c+"<br/>";
    c++;
}

document.querySelector("#demo").innerHTML = html;

/*for (let c = 1;c <=10; c++){
    html += "Número: "+c+"<br/>";
}*/

//mesmo código só que mostrando a diferença entre for e while

