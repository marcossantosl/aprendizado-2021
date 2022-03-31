<!-- ASSOCIANDO CAMPOS DO FORMULÁRIO AOS ÍTENS NA TABELA DO BANCO DE DADOS -->

<?php
require('config.php');

$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

if ($name & $email) {

    //INSTRUÇÃO QUE FAZ UMA CONSULTA VERIFICANDO SE O EMAIL É REPETIDO 
    $sql = $pdo->prepare("SELECT * FROM ifguide.usuarios WHERE email = :email");
    $sql->bindValue(':email', $email);
    $sql->execute();

    if ($sql->rowCount() === 0) {

        // MONTANDO UM TEMPLATE QUE SERÁ SUBSTITUIDO PELOS VALORES CORRETOS
        $sql = $pdo->prepare("INSERT INTO ifguide.usuarios (nome, email) VALUES (:name, :email)"); // PDOStatement class: Representa uma instrução preparada e, após a execução da instrução, um conjunto de resultados associado.

        //SUBSTITUINDO OS VALORES
        $sql->bindValue(':name', $name);
        //$sql->bindParam(':email', $email); 
        $sql->bindValue(':email', $email);

        //EXECUTA A QUERY ACIMA DEPOIS DE ASSOCIAR
        $sql->execute();

        header('Location: index.php');
        exit;
    } else {
        header('Location: adicionar.php');
        exit;
    }
} else {
    header('Location: adicionar.php');
    exit;
};

?>