//FOR LOOP


/*let texto = '';


for(let i=0; i<=50; i++) {//o i é uma váriavel auxiliar criada dentro do escopo do for,enquanto essa condição for satisfeita ele vai repetir o bloco de código
 texto = texto + i + '<br/>'
}

document.getElementById('demo').innerHTML = texto;*/

//FOR LOOP ARRAY

let carros = ['Honda','Nissan','Toyota','Mitsubishi']; //se forem adicionado mais itens ao array,vai continuar sendo adiconados itens na lista abaixo

let html = '<ul>'; //adiciona uma lista não ordenada a variável html

for(let i in carros) { //percorre todos os índices de carros
    html += '<li>'+carros[i]+'</li>';//adiciona a lista de ítens os elementos do array carros, até a condição do for loop for satisfeita 
}

html += '</ul>';//fecha lista não ordenada

document.getElementById("demo").innerHTML = html;