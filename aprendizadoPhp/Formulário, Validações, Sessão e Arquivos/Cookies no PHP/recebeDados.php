<?php
require('header.php');
session_start();

$usuario = filter_input(INPUT_POST, 'usuario', FILTER_SANITIZE_SPECIAL_CHARS);
$senha = filter_input(INPUT_POST, 'senha');
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$idade = filter_input(INPUT_POST, 'idade', FILTER_SANITIZE_NUMBER_INT);

if ($usuario && $senha) {

    $expiracao = time() + (86400 * 30); // o cookie vai expirar 30 dias após a criação 
    setcookie('nome', $usuario, $expiracao); // definindo o nome, o valor do cookie, e o tempo de expiração nos parâmetros

    echo 'Usuário:  ' . $usuario . '<br/>';
    echo 'Email: ' . $email . '<br/>';
    echo 'Senha: ' . $senha . '<br/>';
    echo 'Idade: ' . $idade . '<br/>';
} else {
    $_SESSION['aviso'] = 'Preencha os dados corretamente <br><br>';
    header("Location: index.php");
    exit;
};
