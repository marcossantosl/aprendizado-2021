<?php

$texto = file_get_contents("texto.txt");

$texto = explode('a', $texto); //quebrando o texto por linhas onde tiver a, e vira um array

echo "LINHAS: " . count($texto);//quantidade de ítens no array texto (linhas)
