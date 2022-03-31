<?php
$nome = filter_input(INPUT_POST, 'nome'); //seleciona o campo nome
$senha = filter_input(INPUT_POST, 'senha'); //seleciona o campo senha

if ($nome && $senha) {
    echo 'Usuário:  ' . $nome;
    echo '<br> Senha: ' . $senha;
} else {
    header("Location: index.php"); //redirecionamento de página
    exit; //para a execução do resto da página
};//verifica o se o campo nome e senha é verdadeiro ou falso, se for ele mostra a senha e o usuário, e se não for ele redireciona com o header para a página index.php