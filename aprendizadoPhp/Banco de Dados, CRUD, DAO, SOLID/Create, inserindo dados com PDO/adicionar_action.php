<!-- ASSOCIANDO CAMPOS DO FORMULÁRIO AOS ÍTENS NA TABELA DO BANCO DE DADOS -->

<?php
require('config.php');

$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

if ($name & $email) {

    //INSTRUÇÃO QUE FAZ UMA CONSULTA VERIFICANDO SE O EMAIL É REPETIDO 
    $sql = $pdo->prepare("SELECT * FROM ifguide.usuarios WHERE email = :email");
    $sql->bindValue(':email', $email); //atribuindo $email
    $sql->execute(); //me traga todos os usuários em que o email for igual ao email insrido

    if ($sql->rowCount() === 0) { //Se a quantidade de emails iguais ao inserido for igual a zero ele executa
        // MONTANDO UM TEMPLATE QUE SERÁ SUBSTITUIDO PELOS VALORES CORRETOS
        $sql = $pdo->prepare("INSERT INTO ifguide.usuarios (nome, email) VALUES (:name, :email)"); // PDOStatement class: Representa uma instrução preparada e, após a execução da instrução, um conjunto de resultados associado.
        //SUBSTITUINDO OS VALORES
        $sql->bindValue(':name', $name); //associa o valor inserido, qualquer valor e associa com o :name
        //$sql->bindParam(':email', $email); //associa o parâmetro a variável email, independendte de onde a variável é definida e sobreescrita
        $sql->bindValue(':email', $email);
        //EXECUTA A QUERY ACIMA DEPOIS DE ASSOCIAR
        $sql->execute(); //EXECUTA A QUERY ACIMA DEPOIS DE ASSOCIAR

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