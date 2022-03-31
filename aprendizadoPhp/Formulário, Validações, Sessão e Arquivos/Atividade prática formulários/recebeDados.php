<?php
session_start();

$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_SPECIAL_CHARS);

if ($nome) {
    $_SESSION['nome'] = $nome;
    header("Location: index.php");
    exit;
} else {
    $_SESSION['aviso'] = 'Preencha os dados corretamente <br><br>';
    header("Location: login.php");
    exit;
};
