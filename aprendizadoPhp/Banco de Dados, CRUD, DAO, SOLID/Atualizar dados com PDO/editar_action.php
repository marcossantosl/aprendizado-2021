<!-- ASSOCIANDO CAMPOS DO FORMULÁRIO AOS ÍTENS NA TABELA DO BANCO DE DADOS -->

<?php
require('config.php');

$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$id = filter_input(INPUT_POST, 'id');

if ($id & $name & $email) {

    $sql = $pdo->prepare("UPDATE ifguide.usuarios SET nome = :name, email = :email WHERE id = :id"); //query que faz uma atualização nos valores
    $sql->bindValue(':name', $name);
    $sql->bindValue(':email', $email);
    $sql->bindValue(':id', $id);
    $sql->execute();

    header('Location: index.php');
    exit;
} else {
    header('Location: editar.php');
    exit;
};

?>