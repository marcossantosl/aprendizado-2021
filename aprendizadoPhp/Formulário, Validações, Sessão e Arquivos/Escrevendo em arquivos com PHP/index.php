<?php

$texto = file_get_contents("texto.txt");
$texto = 'Marcos dos Santos';

file_put_contents('nome.txt', $texto); 

//pega o conteúdo do texto.txt, e o reescreve adicionando conteúdo
