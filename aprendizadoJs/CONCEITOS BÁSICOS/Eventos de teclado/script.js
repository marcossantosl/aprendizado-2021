    function digitou(e) {
    if (e.keyCode == 13 && e.ctrlKey == true) { //Keycode 13 =  tecla enter, e a tecla ctrl tem que estar pressionada também
        
        let texto = document.querySelector('.campo').value;

        console.log(texto);
    }
}