function alterar(titulo) {
    document.getElementById("titulo").innerHTML = titulo;
     document.getElementById("campo").value = titulo;
}



function somar(x, y) {
    let total = y + x;
    
    return total;
}

var resultado = somar(10, 20);

console.log(resultado); //30


function sum(x, y) {
    return x + y;
  }
  
  const n1 = sum(1, 2);
  const n2 = n1 + 1;
  console.log(n2); // 4


//Utilizando funções por meio de passagem de parâmetros