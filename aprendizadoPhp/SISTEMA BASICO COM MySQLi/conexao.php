<?php

$conn = mysqli_connect("localhost", "root", "") or die("Não conectou!"); //conecta ao banco 
mysqli_select_db($conn, "projetob"); //seleciona a tabela